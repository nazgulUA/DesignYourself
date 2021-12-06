using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DesignYourself.Models;
using DesignYourself.ViewModels;
namespace DesignYourself.ViewModels.Mapper
{
    public class MapperProfiler:Profile
    {
        public MapperProfiler()
        {
            CreateMap<User, AuthViewModel>().MaxDepth(2);
            CreateMap<AuthViewModel, User>().MaxDepth(2);
            //
            CreateMap<Models.Task, TaskCreationViewModel>().MaxDepth(2);
            CreateMap<TaskCreationViewModel, Models.Task>().MaxDepth(2);
            //
            CreateMap<Models.Task, TaskListViewModel>().MaxDepth(2);
            CreateMap<TaskListViewModel, Models.Task>().MaxDepth(2);
            //
            CreateMap<SolvedTask, TaskAvaluationResultViewModel>().MaxDepth(2).ForMember(dst => dst.StandartData, opt => opt.MapFrom(src => src.Task.StandartData));
            CreateMap<TaskAvaluationResultViewModel, SolvedTask>().MaxDepth(2);
            //
            CreateMap<Models.Task, TaskCreationViewModel>().MaxDepth(2);
            CreateMap<TaskCreationViewModel, Models.Task>().MaxDepth(2);
            //
            CreateMap<SolvedTask, TaskResultViewModel>().MaxDepth(2).ForMember(dst=>dst.TaskName,opt=>opt.MapFrom(src=>src.Task.Name));
            CreateMap<TaskResultViewModel, SolvedTask>().MaxDepth(2);
            //
            CreateMap<TaskSolutionViewModel, Models.Task>().MaxDepth(2);
            CreateMap<Models.Task, TaskSolveViewModel>().MaxDepth(2);
            //
            CreateMap<Models.Task, TaskUpdateViewModel>().MaxDepth(2);
            CreateMap<TaskUpdateViewModel, Models.Task>().MaxDepth(2);
        }

    }
}
