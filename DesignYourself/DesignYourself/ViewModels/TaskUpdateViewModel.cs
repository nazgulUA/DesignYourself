using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignYourself.ViewModels
{
    public class TaskUpdateViewModel
    {
        public int TaskId { get; set; }
        public int UserId { get; set; }
        public int TaskTypeId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string StandartData { get; set; }

    }
}
