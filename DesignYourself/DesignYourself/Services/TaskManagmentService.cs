using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesignYourself.Models;
using DesignYourself.Services.Abstract;
using DesignYourself.ViewModels;
using AutoMapper;
using System.Text.Json;
using System.Text;
using DesignYourself.Models.JsonModels;
using System.Data.Entity;

namespace DesignYourself.Services
{
    public class TaskManagmentService : ITaskManagmentService
    {
        private DesignYourselfContext dbContext;
        private IMapper mapper;
        
        public TaskManagmentService(DesignYourselfContext context,IMapper mapper)
        {
            this.dbContext = context;
            this.mapper = mapper;
        }
        public string CreateTaskData(string StandartData, IEnumerable<string> cellTypes)
        {
            if ((StandartData != null) && (StandartData.Length > 0)){
                JsonDocument doc = JsonDocument.Parse(StandartData);
                JsonElement root = doc.RootElement;
                var cells = root.GetProperty("cells");
                var options = new JsonWriterOptions
                {
                    Indented = false
                };
                using var stream = new System.IO.MemoryStream();
                using var writer = new Utf8JsonWriter(stream, options);
                writer.WriteStartArray();
                foreach (var cell in cells.EnumerateArray())
                {
                    if (cellTypes.Contains(cell.GetProperty("type").ToString()))
                    {
                        cell.WriteTo(writer);
                    }
                }
                writer.WriteEndArray();
                writer.Flush();
                string taskData = Encoding.UTF8.GetString(stream.ToArray());
                return taskData;

            }
            return null;

        }
        public bool CreateNewTask(TaskCreationViewModel taskCreationData)
        {
            if ((taskCreationData != null) && (taskCreationData.StandartData != null))
            {
                if (dbContext.TaskTypes.Any(type => type.TaskTypeId == taskCreationData.TaskTypeId))
                {
                    TaskType taskType = dbContext.TaskTypes.Where(type => type.TaskTypeId == taskCreationData.TaskTypeId).FirstOrDefault();
                    var cellTypes = JsonSerializer.Deserialize<TaskTypeElementsJSON>(taskType.Elements);
                    string taskData = CreateTaskData(taskCreationData.StandartData, cellTypes.Entities);
                    if ((taskData != null) && (taskData.Length > 0))
                    {
                        Models.Task task = new Models.Task()
                        {
                            TaskTypeId = taskCreationData.TaskTypeId,
                            Description = taskCreationData.Description,
                            TaskData = taskData,
                            StandartData = taskCreationData.StandartData,
                            Name = taskCreationData.Name,
                            UserId = taskCreationData.UserId
                        };
                        dbContext.Add(task);
                        dbContext.SaveChangesAsync();
                        return true;
                    }
                }   
            }
            return false;
        }

        public bool Delete(int TaskId)
        {
            if (dbContext.Tasks.Any(s => s.TaskId == TaskId)) { 
                if(dbContext.SolvedTasks.Any(s => s.Task.TaskId == TaskId))
                {
                    dbContext.SolvedTasks.RemoveRange(dbContext.SolvedTasks.Where(s => s.Task.TaskId == TaskId));
                    dbContext.SaveChanges();
                }
                dbContext.Tasks.Remove(dbContext.Tasks.Find(TaskId));
                dbContext.SaveChanges();
                return true;
            }
            
            return false;
        }

        public IEnumerable<TaskListViewModel> GetAll()
        {
           var tasks =  dbContext.Tasks.ToList();
           return mapper.Map<IEnumerable<Models.Task>,IEnumerable<TaskListViewModel>>(tasks);
        }

        public  TaskSolveViewModel GetById(int TaskId)
        {
            if (dbContext.Tasks.Any(task => task.TaskId == TaskId))
            {
                return mapper.Map<Models.Task, TaskSolveViewModel>(  dbContext.Tasks.Find(TaskId));
            }
            return null;
        }

        public IEnumerable<TaskListViewModel> GetByUserId(int UserId)
        {
            if (dbContext.Tasks.Any(task => task.UserId == UserId))
            {
                return mapper.Map<IEnumerable<Models.Task>, IEnumerable<TaskListViewModel>>( dbContext.Tasks.Where(task => task.UserId == UserId).ToList());

            }
            return null;
        }

        public bool UpdateExistTask(TaskUpdateViewModel taskUpdateViewModel)
        {
            if ((taskUpdateViewModel != null) && (taskUpdateViewModel.StandartData != null))
            {
                if ((taskUpdateViewModel.TaskId > 0) && (dbContext.Tasks.Any(task => task.TaskId == taskUpdateViewModel.TaskId)))
                {
                    if (dbContext.TaskTypes.Any(type => type.TaskTypeId == taskUpdateViewModel.TaskTypeId))
                    {
                        var taskType = dbContext.TaskTypes.Where(type => type.TaskTypeId == taskUpdateViewModel.TaskTypeId).FirstOrDefault();
                        var cellTypes = JsonSerializer.Deserialize<TaskTypeElementsJSON>(taskType.Elements);
                        string taskData = CreateTaskData(taskUpdateViewModel.StandartData, cellTypes.Entities);
                        if ((taskData != null) && (taskData.Length > 0))
                        {
                            var task = dbContext.Tasks.Where(task => task.TaskId == taskUpdateViewModel.TaskId).FirstOrDefault();
                            task.TaskTypeId = taskUpdateViewModel.TaskTypeId;
                            task.Description = taskUpdateViewModel.Description;
                            task.TaskData = taskData;
                            task.StandartData = taskUpdateViewModel.StandartData;
                            task.Name = taskUpdateViewModel.Name;

                            dbContext.Update(task);
                            dbContext.SaveChanges();
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        public bool Exist(int TaskId)
        {
            if (dbContext.Tasks.Any(t => t.TaskId == TaskId))
            {
                return true;
            }
            return false;
        }
    }
}
