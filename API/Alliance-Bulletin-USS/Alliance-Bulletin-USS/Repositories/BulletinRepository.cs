using Alliance_Bulletin_USS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Alliance_Bulletin_USS.Repositories
{
    public class BulletinRepository : TechnicalBullitenDBContext
    {
        public Bulletin GetModel(int modelID)
        {
            Bulletin model = null;

            try
            {
                model = Bulletins.FirstOrDefault(x => x.BulletinId == modelID);
            }
            catch(Exception ex)
            {
                //TODO:Log Exception
            }

            return model;
        }

        public List<Bulletin> GetModels()
        {
            List<Bulletin> models = null;

            try
            {
                models = Bulletins.Where(x => !x.IsDeleted).ToList();                             
            }
            catch (Exception ex)
            {
                //TODO:Log Exception
            }

            return models;
        }

        public Boolean SaveModel(Bulletin model)
        {
            try
            {
                Bulletins.Attach(model);

                if (model.BulletinId == 0)
                {
                    Entry(model).State = EntityState.Added;
                }
                else
                {
                    Entry(model).State = EntityState.Modified;
                }

                SaveChanges();

                return true;
            }
            catch(Exception ex)
            {
                //TODO: Log Exception
            }

            return false;
        }

        public List<String> GetAllSoftwareTypes()
        {
            List<String> softwareTypes = null;

            try
            {
                softwareTypes = Bulletins.Where(x => !x.IsDeleted).Select(x => x.Software).ToList();
            }
            catch (Exception ex)
            {
                //TODO:Log Exception
            }

            return softwareTypes;
        }

        public Boolean DeleteModel(Int32 modelID)
        {
            Bulletin model = this.GetModel(modelID);

            try
            {
                model.IsDeleted = true;
                model.DateModified = DateTime.Now;

                Bulletins.Attach(model);

                if (model.BulletinId == 0)
                {
                    Entry(model).State = EntityState.Added;
                }
                else
                {
                    Entry(model).State = EntityState.Modified;
                }

                SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                //TODO: Log Exception
            }

            return false;
        }

    }
}
