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
    public class TaskEvaluationTests
    {
        public DesignYourselfContext dbContext;
        public IMapper mapper;
        public ITaskEvaluationService service;
        public TaskEvaluationTests()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DesignYourselfContext>();

            var options = optionsBuilder.UseSqlServer("Server=DESKTOP-N8DQQ8G;Database=DesignYourself;Trusted_Connection=True;", x => x.UseNetTopologySuite()).Options;
            dbContext = new DesignYourselfContext(options);
            var configuration = new MapperConfiguration(c =>
            {
                c.AddProfile<MapperProfiler>();
            });
            mapper = configuration.CreateMapper();
            service = new TaskEvaluationService(dbContext, mapper);

        }
        [Fact]
        public void TestParseStandartDataToTaskData()
        {
            using (StreamReader r = new StreamReader("json.json"))
            {
                using (FileStream w = File.OpenWrite("jsonOut.json"))
                {
                    string json = r.ReadToEnd();
                    JsonDocument doc = JsonDocument.Parse(json);
                    JsonElement outJson = new JsonElement();
                    JsonElement root = doc.RootElement;
                    var test = root.GetProperty("cells");
                    string outString = "";
                    var options = new JsonWriterOptions
                    {
                        Indented = false
                    };

                    using var stream = new MemoryStream();
                    using var writer = new Utf8JsonWriter(stream, options);
                    writer.WriteStartArray();
                    foreach (var cell in test.EnumerateArray())
                    {
                        if (cell.GetProperty("type").GetString() == "uml.Class")
                        {
                            cell.WriteTo(writer);
                        }
                    }
                    writer.WriteEndArray();
                    writer.Flush();
                    string json123 = Encoding.UTF8.GetString(stream.ToArray());
                    Assert.True(json123.Length > 0);
                }
            }


        }
        [Fact]
        public void GetTaskTypeElementsFromDataBase()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DesignYourselfContext>();

            var options = optionsBuilder.UseSqlServer("Server=DESKTOP-N8DQQ8G;Database=DesignYourself;Trusted_Connection=True;", x => x.UseNetTopologySuite()).Options;
            using (DesignYourselfContext context = new DesignYourselfContext(options))
            {
                TaskType entites = context.TaskTypes.Find(1);
                var cellTypes = JsonSerializer.Deserialize<TaskTypeElementsJSON>(entites.Elements);
                Assert.True((cellTypes.Entities != null) && (cellTypes.Relationship != null));
            }
        }

        [Fact]
        public void TaskSolutionValidationCorrectDataTest()
        {
            using (StreamReader reader=new StreamReader("D:\\Architecture\\DesignYourself\\DesignYourself\\DesignYourself\\DesignYourself.Tests\\TestValidationCorrectData.json"))
            {
                string intputData = reader.ReadToEnd();
                Assert.NotNull(service.TaskResultValidation(intputData));
            }
        }

        [Fact]
        public void TaskSolutionValidationBadDataTest()
        {
            using (StreamReader reader = new StreamReader("D:\\Architecture\\DesignYourself\\DesignYourself\\DesignYourself\\DesignYourself.Tests\\TestValidationBadData.json"))
            {
                string intputData = reader.ReadToEnd();
                Assert.Null(service.TaskResultValidation(intputData));
            }
        }

        [Fact]
        public void TaskSolutionValidationNoDataTest()
        {
                string intputData = "";
            Assert.Null(service.TaskResultValidation(intputData));
        }
        [Fact]
        public void TaskEvaluationTestGoodResult()
        {
            TaskSolutionViewModel model = new TaskSolutionViewModel()
            {
                TaskId = 1,
                UserId = 1,
                StandartData = dbContext.Tasks.Find(1).StandartData
            };
            Assert.Equal(1,service.EvaluateTaskResult(model));
        }
        [Fact]
        public void TaskEvaluationTestBadTaskId()
        {
            TaskSolutionViewModel model = new TaskSolutionViewModel()
            {
                TaskId = 123,
                UserId = 1,
                StandartData = dbContext.Tasks.Find(1).StandartData
            };

            Action act = () => service.EvaluateTaskResult(model);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("Task with id "+model.TaskId+" not exist", exception.Message);
        }
        [Fact]
        public void TaskEvaluationTestNoDataTest()
        {
            TaskSolutionViewModel model = new TaskSolutionViewModel()
            {
                TaskId = 123,
                UserId = 1,
                StandartData = dbContext.Tasks.Find(1).StandartData
            };

            Action act = () => service.EvaluateTaskResult(null);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("Task Solution data is null", exception.Message);
        }




    }
}
