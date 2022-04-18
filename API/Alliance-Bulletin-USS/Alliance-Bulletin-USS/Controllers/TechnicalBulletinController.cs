using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Alliance_Bulletin_USS.Models;
using Alliance_Bulletin_USS.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace Alliance_Bulletin_USS.Controllers
{
    [Route("api/[controller]")]
    public class TechnicalBulletinController : ControllerBase
    {
        BulletinRepository _bulletinRepo;
        private readonly IConfiguration _configuration;

        public TechnicalBulletinController(IConfiguration configuration)
        {
            _configuration = configuration;
            _bulletinRepo = new BulletinRepository();
        }

        //[HttpGet]
        //public JsonResult Get()
        //{
        //Simple unsafe query TO CHANGE LATER
        //string query = @"select BulletinID DateCreated Topic";
        //DataTable table = new DataTable();
        //string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
        //SqlDataReader myReader;
        //using (SqlConnection myCon = new SqlConnection(sqlDataSource))
        //{
        //    myCon.Open();
        //    using (SqlCommand myCommand = new SqlCommand(query, myCon))
        //    {
        //        myReader = myCommand.ExecuteReader();
        //        table.Load(myReader); ;

        //        myReader.Close();
        //        myCon.Close();
        //    }
        //}

        //return new JsonResult(table);
        //}

        [AllowAnonymous]
        [HttpGet("GetBulletin")]
        public IActionResult GetModel(int modelID)
        {
            List<String> bulletinModel = _bulletinRepo.GetModel();

            return Ok(bulletinModel);
        }

        [AllowAnonymous]
        [HttpGet("GetAllSoftwareTypes")]
        public IActionResult GetAllSoftwareTypes()
        {
            List<String> softwareTypes = _bulletinRepo.GetAllSoftwareTypes();

            return Ok(softwareTypes);
        }

        [AllowAnonymous]
        [HttpPost]
        public JsonResult Post(Bulletin bulletin)
        {
            if(bulletin.BulletinId == 0)
            {
                bulletin.DateCreated = DateTime.Now;
            }

            bulletin.DateModified = DateTime.Now;

            if(_bulletinRepo.SaveModel(bulletin))
            {
                return new JsonResult("Added Successfully");
            }

            return new JsonResult("Failed");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int bulletinID)
        {
            try
            {
                if (_bulletinRepo.DeleteModel(bulletinID))
                {
                    return new JsonResult("Deleted Successfully");
                }
            }
            catch(Exception ex)
            {
                //TODO: Log Exception
            }

            return new JsonResult("Delete Failed");
        }
    }
}