using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignYourself.Models.JsonModels
{
    public class TaskTypeElementsJSON
    {
        public IEnumerable<string> Entities { get; set; }
        public IEnumerable<string> Relationship { get; set; }

    }
}
