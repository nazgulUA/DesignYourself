using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignYourself.ViewModels
{
    public class AuthViewModel
    {
        public int UserId { get; set; }
        public int UserTypeId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
