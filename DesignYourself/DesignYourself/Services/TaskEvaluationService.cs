using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesignYourself.Services.Abstract;
using DesignYourself.ViewModels;
using DesignYourself.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using AutoMapper;
using DesignYourself.Models.JsonModels;
using Microsoft.EntityFrameworkCore;

namespace DesignYourself.Services
{
    public class TaskEvaluationService : ITaskEvaluationService
    {
        private DesignYourselfContext dbContext;
        private IMapper mapper;
        public TaskEvaluationService(DesignYourselfContext context,IMapper mapper)
        {
            this.dbContext = context;
            this.mapper = mapper;
        }
        public TaskAvaluationResultViewModel CreateTaskEvaluation(TaskSolutionViewModel task)
        {
            var Mark = EvaluateTaskResult(task);
            DateTime carrentDate = DateTime.Now;
            SolvedTask solved = new SolvedTask
            {
                TaskId = task.TaskId,
                UserId = task.UserId,
                Mark = Mark,
                SolvationDate = carrentDate
            };
            this.dbContext.SolvedTasks.Add(solved);
            this.dbContext.SaveChanges();
            SolvedTask solvedNew = this.dbContext.SolvedTasks.Include(st => st.Task).Where(st => st.SolvedTaskId == solved.SolvedTaskId).FirstOrDefault();
            return mapper.Map<SolvedTask, TaskAvaluationResultViewModel>(solvedNew);
        }
        public int EvaluateTaskResult(TaskSolutionViewModel task)
        {
            if (task != null)
            {
                int TaskId = task.TaskId;
                TaskStandartDataModelJSON data = TaskResultValidation(task.StandartData);
                if (IsTaskExist(TaskId) && (data != null))
                {
                    Models.Task testTask=dbContext.Tasks.Where(t => t.TaskId == task.TaskId).FirstOrDefault();
                    Models.TaskType type = dbContext.TaskTypes.Where(t => t.TaskTypeId == testTask.TaskTypeId).FirstOrDefault();
                    TaskStandartDataModelJSON standartData = JsonSerializer.Deserialize<TaskStandartDataModelJSON>(testTask.StandartData);
                    TaskTypeElementsJSON elements = JsonSerializer.Deserialize<TaskTypeElementsJSON>(type.Elements);
                    if (data.cells.Count() != standartData.cells.Count())
                    {
                        return 0;
                    }
                    var relationship=data.cells.Where(cell => elements.Relationship.Contains(cell.type)).ToList();
                    var srelationship=standartData.cells.Where(cell => elements.Relationship.Contains(cell.type)).ToList();
                    if (relationship.Count() != srelationship.Count())
                    {
                        return 0;
                    }
                    foreach(var e in elements.Relationship)
                    {
                        if (relationship.Where(r => r.type == e).Count() != srelationship.Where(r => r.type == e).Count())
                        {
                            return 0;
                        }

                    }
                    var entities = data.cells.Where(cell => elements.Entities.Contains(cell.type)).ToList();
                    var sentites = standartData.cells.Where(cell => elements.Entities.Contains(cell.type)).ToList();
                    foreach(var cell in sentites)
                    {
                        if (entities.Any(e => (e.type == cell.type) && (e.name == cell.name)))
                        {
                          var entity=entities.Where(e => (e.type == cell.type) && (e.name == cell.name)).FirstOrDefault();
                            if (!(entity.attributes.SequenceEqual(cell.attributes) && entity.methods.SequenceEqual(cell.methods))) {
                                return 0;
                            }
                        }
                        else
                        {
                            return 0;
                        }
                    }
                    foreach(var cell in relationship)
                    {
                        var sEntity = entities.Where(e=>e.id==cell.source.id).FirstOrDefault();
                        var tEntity = entities.Where(e => e.id == cell.target.id).FirstOrDefault();
                        var sSourceEntity = sentites.Where(e => e.name == sEntity.name).FirstOrDefault();
                        var sTargetEntity = sentites.Where(e => e.name == tEntity.name).FirstOrDefault();
                        if (srelationship.Any(sr => (sr.source.id == sSourceEntity.id) && (sr.target.id == sTargetEntity.id)))
                        {
                            if(srelationship.Where(sr => (sr.source.id == sSourceEntity.id) && (sr.target.id == sTargetEntity.id)).FirstOrDefault().type != cell.type)
                            {
                                return 0;
                            }
                        }
                        else
                        {
                            return 0;
                        }
                    }
                }
                else
                {
                    return 0;

                }
            }
            else
            {
                return 0;
            }
            return 1;
        }

        public IEnumerable<TaskResultViewModel> GetTaskEvaluations(int UserId)
        {
            var solvedTasks = dbContext.SolvedTasks.Include(st => st.Task).Where(st => st.UserId == UserId);
            return mapper.Map<IEnumerable<SolvedTask>, IEnumerable<TaskResultViewModel>>(solvedTasks);
        }
        public IEnumerable<TaskResultViewModel> GetTaskEvaluations()
        {
            var solvedTasks = dbContext.SolvedTasks.Include(st => st.Task).ToList();
            return mapper.Map<IEnumerable<SolvedTask>, IEnumerable<TaskResultViewModel>>(solvedTasks);
        }
        public bool IsTaskExist(int TaskId)
        {
            if (TaskId >= 0)
            {
                if (dbContext.Tasks.Any(task => task.TaskId == TaskId))
                {
                    return true;
                }
            }
            return false;
        }

        public TaskStandartDataModelJSON TaskResultValidation(string TaskData)
        {
            try
            {
                if ((TaskData != null) && (TaskData.Length > 0))
                {
                    TaskStandartDataModelJSON dataOut = JsonSerializer.Deserialize<TaskStandartDataModelJSON>(TaskData);
                    if ((dataOut.cells != null) && (dataOut.cells.Count() > 0))
                    {
                        return dataOut;
                    }
                }
            }catch(Exception exception)
            {
                return null;
            }
            return null;
        }
    }
}
