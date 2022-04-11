using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Alliance_Bulletin_USS.Models
{
    public class Bulletin
    {
        public int identity { get; set; }

        public int createdDay { get; set; }
        public int createdMonth { get; set; }
        public int createdYear { get; set; }

        public string dateCreated { get; set; }
        public string topic { get; set; }
        public string software { get; set; }
        public string symptom { get; set; }
        public string resolution { get; set; }
        public string notes { get; set; }
        public string noteImage { get; set; }

        public bool isDeleted { get; set; }

        public int modifiedDay { get; set; }
        public int modifiedMonth { get; set; }
        public int modifiedYear { get; set; }

        
    }
}
