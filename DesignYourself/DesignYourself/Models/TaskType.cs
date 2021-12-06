using System;
using System.Collections.Generic;

#nullable disable

namespace DesignYourself.Models
{
    public partial class TaskType
    {
        public TaskType()
        {
            Tasks = new HashSet<Task>();
        }

        public int TaskTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Elements { get; set; }

        public virtual ICollection<Task> Tasks { get; set; }
    }
}
