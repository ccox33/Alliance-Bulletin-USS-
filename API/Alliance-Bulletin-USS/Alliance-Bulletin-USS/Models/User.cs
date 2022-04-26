using System;

namespace Alliance_Bulletin_USS.Models
{
    public class User
    {
        public String Username { get; set; }

        public String Password { get; set; }

        public String UserEmail { get; set; }

        public Boolean Subscribed { get; set; }

        public Boolean IsDev { get; set; }

        public Boolean IsDeleted { get; set; }
    }
}
