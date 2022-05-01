using Alliance_Bulletin_USS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Alliance_Bulletin_USS.Repositories
{
    public class IsAuthorizedRepository : IsAuthorizedDBContext
    {
        public List<isAuthorized> GetAuthorized()
        {
            List<isAuthorized> models = null;

            try
            {
                models = isAuthorized.Where(x => !(x.UserEmail.Length > 0)).ToList();                            
            }
            catch (Exception ex)
            {
                //TODO:Log Exception
            }

            return models;
        }

    }
}
