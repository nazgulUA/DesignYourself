using DesignYourself.Models;
using DesignYourself.Services.Abstract;
using DesignYourself.ViewModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
namespace DesignYourself.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private DesignYourselfContext dbContext;
        private IMapper mapper;
        public AuthenticationService(DesignYourselfContext dbContext,IMapper mapper){
            this.dbContext = dbContext;
            this.mapper = mapper;
        }
        public bool Logout(AuthViewModel user)
        {
            return true;
        }

        public AuthViewModel SignIn(string email, string password)
        {
            var user = dbContext.Users.Where(test => test.Email == email).FirstOrDefault();
            if (user != null)
            {
                if ( user.Password == password)
                {
                    return mapper.Map<User, AuthViewModel>(user);
                   //return new AuthViewModel() { Email = user.Email, Password = user.Password, UserId = user.UserId };
                }
                throw new Exception("password is incorrect");
            }
            throw new Exception("User with enter email not exist");
        }

        public  AuthViewModel SignUp(string email, string password)
        {
            if (dbContext.Users.Any(test => test.Email == email))
            {
                throw new Exception("user with enter email already exist");
            }
            else
            {
                if (new EmailAddressAttribute().IsValid(email))
                {
                    User user = dbContext.Users.Add(new User() { Email = email, Password = password, UserTypeId = 2 }).Entity;
                    dbContext.SaveChangesAsync();
                    User userOut = dbContext.Users.Where(u => u.Email == user.Email).FirstOrDefault();
                    return mapper.Map<User, AuthViewModel>(userOut);
                }
                else
                {
                    throw new Exception("Email Address is invalid");
                }
            }
        }
        public bool UserExist(AuthViewModel user)
        {
            if (dbContext.Users.Any(test => test.UserId == user.UserId))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
