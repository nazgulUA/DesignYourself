using System;
using Xunit;
using DesignYourself.Models;
using DesignYourself.ViewModels;
using DesignYourself.ViewModels.Mapper;
using AutoMapper;
namespace DesignYourself.Tests
{
    public class ViewModelMapperTests
    {
        private IMapper mapper;
        public ViewModelMapperTests()
        {
            var config = new MapperConfiguration(c => c.AddProfile<MapperProfiler>());
            this.mapper = config.CreateMapper();
        }


        [Fact]
        public void TestAuthViewModel()
        {
            User testUserModel = new User()
            {
                UserId = 1,
                UserTypeId = 2,
                Email = "ta4acdyg@gmail.com",
                Password = "testPass"
            };
            AuthViewModel userViewModel = mapper.Map<User, AuthViewModel>(testUserModel);
            Assert.Equal(testUserModel.UserId,userViewModel.UserId);
        }
        [Fact]
        public void TestTaskResultViewModel()
        {

            Task task = new Task
            {
                TaskId = 2,
                Name = "testTask"
            };
            SolvedTask solvedTask = new SolvedTask()
            {
                SolvedTaskId = 2,
                TaskId = 2,
                Task = task,
                Mark = 1,
                UserId = 1,
                SolvationDate = DateTime.Now
            };
            TaskResultViewModel resultViewModel = mapper.Map<SolvedTask, TaskResultViewModel>(solvedTask);
            Assert.Equal(resultViewModel.TaskName, solvedTask.Task.Name);

        }
    }
}
