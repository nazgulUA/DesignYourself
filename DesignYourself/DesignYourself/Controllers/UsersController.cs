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
    [ApiController]
    [Produces("application/json")]
    public class UsersController : ControllerBase
    {
        private readonly DesignYourselfContext _context;
        private readonly IAuthenticationService service;
        private readonly IMapper mapper;
        public UsersController(DesignYourselfContext context, IAuthenticationService service,  IMapper mapper)
        {
            _context = context;
            this.service = service;
            this.mapper = mapper;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AuthViewModel>>> GetUsers()
        {
            var users = await _context.Users.ToListAsync();

            return Ok(mapper.Map<IEnumerable<User>,IEnumerable<AuthViewModel>>(users));
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AuthViewModel>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(mapper.Map<User,AuthViewModel>(user));
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public  ActionResult<AuthViewModel> SignUp(SignUpViewModel user)
        {
            try
            {
                 return  Ok(service.SignUp(user.Email, user.Password));
            }catch(Exception exception)
            {
                return BadRequest(exception.Message);

            }
        }
        [HttpPost]
        public ActionResult<AuthViewModel> SignIn(SignUpViewModel user)
        {
            try
            {
                return Ok(service.SignIn(user.Email, user.Password));
            }
            catch (Exception exception)
            {
                return BadRequest(exception.Message);

            }
        }


        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
