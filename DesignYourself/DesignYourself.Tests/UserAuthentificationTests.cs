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
using DesignYourself.Services.Abstract;
using DesignYourself.Services;
using DesignYourself.Models;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace DesignYourself.Tests
{
    public class UserAuthentificationTests
    {
        public DesignYourselfContext dbContext;
        public IMapper mapper;
        public IAuthenticationService service;
        public UserAuthentificationTests()
        {
            var optionsBuilder = new DbContextOptionsBuilder<DesignYourselfContext>();

            var options = optionsBuilder.UseSqlServer("Server=DESKTOP-N8DQQ8G;Database=DesignYourself;Trusted_Connection=True;", x => x.UseNetTopologySuite()).Options;
            dbContext = new DesignYourselfContext(options);
            var configuration = new MapperConfiguration(c =>
            {
                c.AddProfile<MapperProfiler>();
            });
            mapper = configuration.CreateMapper();
            service = new AuthenticationService(dbContext, mapper);
        }

        [Fact]
        public void  UserSignInCorrectDataTest()
        {
            string email = "student@gmail.com";
            string password = "111";
            var auth = service.SignIn(email, password);
            Assert.True(auth.UserId == 2);
        }
        [Fact]
        public void UserSignInIncorrectEmail()
        {
            string email = "stude123nt@gmail.com";
            string password = "111";
            Action act = () => service.SignIn(email, password);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("User with enter email not exist",exception.Message);
        }

        [Fact]
        public void UserSignInIncorrectPassword()
        {
            string email = "student@gmail.com";
            string password = "111qwreqq";
            Action act = () => service.SignIn(email, password);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("password is incorrect", exception.Message);
        }
        [Fact]
        public void UserSignUpIncorrectEmailFormatTest()
        {
            string email = "stude1234ntgmail.rqwe.com.qwer";
            string password = "111";
            Action act = () => service.SignUp(email, password);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("Email Address is invalid", exception.Message);
        } 
        [Fact] 
        public void UserSignUpExistEmail()
        {
            string email = "student@gmail.com";
            string password = "111";
            Action act = () => service.SignUp(email, password);
            Exception exception = Assert.Throws<Exception>(act);
            Assert.Equal("user with enter email already exist", exception.Message);
        }


    }
}
