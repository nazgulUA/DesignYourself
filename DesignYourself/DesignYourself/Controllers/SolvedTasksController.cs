using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DesignYourself.Models;
using DesignYourself.Services.Abstract;
using AutoMapper;
using DesignYourself.ViewModels;
namespace DesignYourself.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SolvedTasksController : ControllerBase
    {
        private readonly DesignYourselfContext _context;
        private readonly IMapper mapper;
        private readonly ITaskEvaluationService service;

        public SolvedTasksController(DesignYourselfContext context, IMapper mapper, ITaskEvaluationService service)
        {
            _context = context;
            this.mapper = mapper;
            this.service = service;
        }

        // GET: api/SolvedTasks
        [HttpGet]
        public ActionResult<IEnumerable<TaskResultViewModel>> GetSolvedTasks()
        {
            var marks = service.GetTaskEvaluations();
            if (marks != null)
            {
                return Ok(marks);
            }
            return NotFound();
        }

        // GET: api/SolvedTasks/5
        [HttpGet("{id}")]
        public ActionResult<SolvedTask> GetSolvedTask(int id)
        {
            var marks = service.GetTaskEvaluations(id);
            if (marks != null)
            {
                return Ok(marks);
            }
            return NotFound();
        }
       
        // POST: api/SolvedTasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public ActionResult<TaskAvaluationResultViewModel> PostSolvedTask(TaskSolutionViewModel solvedTask)
        {
            try
            {
                var createdTaskResult = service.CreateTaskEvaluation(solvedTask);
                return Ok(createdTaskResult);
            }catch(Exception exception)
            {
                return BadRequest(exception);
            }
        }

        // DELETE: api/SolvedTasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSolvedTask(int id)
        {
            var solvedTask = await _context.SolvedTasks.FindAsync(id);
            if (solvedTask == null)
            {
                return NotFound();
            }

            _context.SolvedTasks.Remove(solvedTask);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SolvedTaskExists(int id)
        {
            return _context.SolvedTasks.Any(e => e.SolvedTaskId == id);
        }
    }
}
