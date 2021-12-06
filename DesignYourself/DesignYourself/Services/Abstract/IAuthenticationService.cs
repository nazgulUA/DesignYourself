using DesignYourself.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace DesignYourself.Services.Abstract
{
    public interface IAuthenticationService
    {
        public AuthViewModel SignIn(string email, string password);
        public AuthViewModel SignUp(string email, string password);
        public bool UserExist(AuthViewModel user);
        public bool Logout(AuthViewModel user);
    }
}
