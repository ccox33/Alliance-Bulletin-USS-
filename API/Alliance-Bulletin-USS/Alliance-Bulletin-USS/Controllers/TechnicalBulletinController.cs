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

        [AllowAnonymous]
        [HttpGet("GetBulletinByID")]
        public IActionResult GetModel(string modelID)
        {
            Bulletin bulletinModel = _bulletinRepo.GetModel(Int32.Parse(modelID));

            return Ok(bulletinModel);
        }

        [AllowAnonymous]
        [HttpGet("GetBulletins")]
        public IActionResult GetBulletins()
        {
            List<Bulletin> bulletinModels = _bulletinRepo.GetBulletins();

            return Ok(bulletinModels);
        }

        [AllowAnonymous]
        [HttpPost("SaveModel")]
        public JsonResult SaveModel([FromBody]Bulletin bulletin)
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

        [AllowAnonymous]
        [HttpDelete("DeleteBulletin")]
        public JsonResult Delete(string bulletinID)
        {
            try
            {
                if (_bulletinRepo.DeleteModel(Int32.Parse(bulletinID)))
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