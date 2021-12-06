using System;
using System.Collections.Generic;

#nullable disable

namespace DesignYourself.Models
{
    public partial class User
    {
        public User()
        {
            SolvedTasks = new HashSet<SolvedTask>();
            Tasks = new HashSet<Task>();
        }

        public int UserId { get; set; }
        public int UserTypeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public  UserType UserType { get; set; }
        public virtual ICollection<SolvedTask> SolvedTasks { get; set; }
        public virtual ICollection<Task> Tasks { get; set; }
    }
}
