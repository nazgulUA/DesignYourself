using System;
using Xunit;
using System.IO;
using DesignYourself.Models.JsonModels;
using DesignYourself.ViewModels;
using DesignYourself.ViewModels.Mapper;
using AutoMapper;
using System.Buffers;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text;
using DesignYourself.Models;
using Microsoft.EntityFrameworkCore;
using System.Configuration;
using DesignYourself.Services.Abstract;
using DesignYourself.Services;
namespace DesignYourself.Tests
{
   public  class TaskManagementTests
    {
        public DesignYourselfContext dbContext;
        public IMapper mapper;
        public ITaskManagmentService service;
        public TaskManagementTests()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DesignYourselfContext>();

            var options = optionsBuilder.UseSqlServer("Server=DESKTOP-N8DQQ8G;Database=DesignYourself;Trusted_Connection=True;", x => x.UseNetTopologySuite()).Options;
            dbContext = new DesignYourselfContext(options);
            var configuration = new MapperConfiguration(c =>
            {
                c.AddProfile<MapperProfiler>();
            });
            mapper = configuration.CreateMapper();
            service = new TaskManagmentService(dbContext, mapper);

        }
        [Fact]
        public void DeleteTaskBadIdTest()
        {
            var TaskId = 10000;
            Assert.False(service.Delete(TaskId));
        }
        [Fact]
        public void TaskGetByIdCorrectIdTest()
        {
            var TaskId = 1;
            var task = service.GetById(TaskId);
            Assert.NotNull(task);
            Assert.Equal(1, task.TaskId);
        }
        [Fact]
        public void TaskGetByIdBadIdTest()
        {
            var TaskId = 1123;
            var task = service.GetById(TaskId);
            Assert.Null(task);
        }
        [Fact]
        public void TaskCreationBadTaskType()
        {
            var inputData = new TaskCreationViewModel()
            {
                TaskTypeId = 2,
                UserId = 1,
                Description = "rqwerqwerqwer",
                Name = "testName",
                StandartData = "{StandartData}"
            };
            Assert.False(service.CreateNewTask(inputData));
        }
        [Fact]
        public void TaskCreationNoStandartData()
        {
            var inputData = new TaskCreationViewModel()
            {
                TaskTypeId = 2,
                UserId = 1,
                Description = "rqwerqwerqwer",
                Name = "testName",
            };
            Assert.False(service.CreateNewTask(inputData));
        }









    }
}
