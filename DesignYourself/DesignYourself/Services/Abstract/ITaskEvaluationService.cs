using DesignYourself.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesignYourself.Models.JsonModels;
namespace DesignYourself.Services.Abstract
{
    public interface ITaskEvaluationService
    {
        public int EvaluateTaskResult(TaskSolutionViewModel task);
        public TaskStandartDataModelJSON TaskResultValidation(string TaskData);
        public TaskAvaluationResultViewModel CreateTaskEvaluation(TaskSolutionViewModel task);
        public IEnumerable<TaskResultViewModel> GetTaskEvaluations(int UserId);
        public IEnumerable<TaskResultViewModel> GetTaskEvaluations();
        public bool IsTaskExist(int TaskId);
    }
}
