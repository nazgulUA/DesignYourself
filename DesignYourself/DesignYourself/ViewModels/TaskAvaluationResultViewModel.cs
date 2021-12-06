using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DesignYourself.ViewModels
{
    public class TaskAvaluationResultViewModel
    {
        public int SolvedTaskId { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime SolutionDate { get; set; }
        public int Mark { get; set; }
        public string StandartData { get; set; }
    }
}
