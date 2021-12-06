using System;
using System.Collections.Generic;

#nullable disable

namespace DesignYourself.Models
{
    public partial class Task
    {
        public Task()
        {
            SolvedTasks = new HashSet<SolvedTask>();
        }

        public int TaskId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string TaskData { get; set; }
        public string StandartData { get; set; }
        public int UserId { get; set; }
        public int TaskTypeId { get; set; }

        public  TaskType TaskType { get; set; }
        public  User User { get; set; }
        public virtual ICollection<SolvedTask> SolvedTasks { get; set; }
    }
}
