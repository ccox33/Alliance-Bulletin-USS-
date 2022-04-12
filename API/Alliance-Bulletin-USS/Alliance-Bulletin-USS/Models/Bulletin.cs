using System;

namespace Alliance_Bulletin_USS.Models
{
    public partial class Bulletin
    {
        public Int32 BulletinId { get; set; }

        public DateTime DateCreated { get; set; }

        public String Topic { get; set; }

        public String Software { get; set; }

        public String Symptom { get; set; }

        public String Resolution { get; set; }

        public String Notes { get; set; }

        public String Noteimage { get; set; }

        public Boolean IsDeleted { get; set; }

        public DateTime DateModified { get; set; }
    }
}
