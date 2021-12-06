using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DesignYourself.Models.JsonModels
{
    public class TaskStandartDataModelJSON
    {
        public IEnumerable<Cell> cells{get;set;}
    }
    public class Cell
    {
        public string type { get; set; }
        public IEnumerable<string> attributes { get; set; }
        public IEnumerable<string> methods { get; set; }
        public string name { get; set; }
        public string id { get; set; }
        public Connection source { get; set; }
        public Connection target { get; set; }
    }
    public class Connection {
        public string id { get; set; }
    }
}
