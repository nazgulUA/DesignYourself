using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DesignYourself.Models;
using DesignYourself.ViewModels;
using DesignYourself.Services.Abstract;
using AutoMapper;
namespace DesignYourself.Controllers
{
    [Route("api/[controller]/[action]")]
    [Produces("application/json")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly DesignYourselfContext _context;
        private readonly IMapper mapper;
        private readonly ITaskManagmentService taskService;

        public TasksController(DesignYourselfContext context, IMapper mapper, ITaskManagmentService service)
        {
            this._context = context;
            this.mapper = mapper;
            this.taskService = service;
        }

        // GET: api/Tasks
        [HttpGet]
        public  ActionResult<IEnumerable<TaskListViewModel>> GetTaskList()
        {
            var tasks =  taskService.GetAll();
            return Ok(tasks);
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        public ActionResult<TaskSolveViewModel> GetTask(int id)
        {
            var task =  taskService.GetById(id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }
        [HttpGet("{id}")]
        public ActionResult<TaskSolveViewModel> GetFullTask(int id)
        {
            var task = _context.Tasks.Find(id);

            if (task == null)
            {
                return NotFound();
            }

            return Ok(task);
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public IActionResult UpdateTask(TaskUpdateViewModel taskUpdate)
        {
            if ( taskService.UpdateExistTask(taskUpdate))
            {
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }

        // POST: api/Tasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<Models.Task> PostTask(TaskCreationViewModel taskCreate)
        {
            if ( taskService.CreateNewTask(taskCreate))
            {
                return Ok();
            }
            else
            {
                return BadRequest();

            }
        }

            // DELETE: api/Tasks/5
            [HttpDelete("{id}")]
        public IActionResult DeleteTask(int id)
        {
                if ( taskService.Delete(id))
                {
                    return Ok();
                }
                else
                {
                    return BadRequest();

                }
        }

        private bool TaskExists(int id)
        {
            return _context.Tasks.Any(e => e.TaskId == id);
        }
    }
}
