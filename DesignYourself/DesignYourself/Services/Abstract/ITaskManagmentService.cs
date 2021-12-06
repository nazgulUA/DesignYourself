using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesignYourself.Models;
using DesignYourself.ViewModels;
using AutoMapper;

namespace DesignYourself.Services.Abstract
{
    public interface ITaskManagmentService
    {
        public IEnumerable<TaskListViewModel> GetAll();
        public IEnumerable<TaskListViewModel> GetByUserId(int UserId);
        public TaskSolveViewModel GetById(int TaskId);
        public bool CreateNewTask(TaskCreationViewModel taskCreationData);
        public bool Delete(int TaskId);
        public bool UpdateExistTask(TaskUpdateViewModel taskUpdateViewModel);

        public bool Exist(int TaskId);
        public string CreateTaskData(string StandartData, IEnumerable<string> cellTypes);
    }
}
