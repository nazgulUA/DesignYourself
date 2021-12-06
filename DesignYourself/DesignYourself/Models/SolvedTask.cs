using System;
using System.Collections.Generic;

#nullable disable

namespace DesignYourself.Models
{
    public partial class SolvedTask
    {
        public int SolvedTaskId { get; set; }
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public int Mark { get; set; }
        public DateTime SolvationDate { get; set; }

        public  Task Task { get; set; }
        public  User User { get; set; }
    }
}
