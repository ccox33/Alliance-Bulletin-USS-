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

namespace Alliance_Bulletin_USS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TechnicalBullitenController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public TechnicalBullitenController(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        [HttpGet]
        public JsonResult Get()
        {
            //Simple unsafe query TO CHANGE LATER
            string query = @"select BulletinID DateCreated Topic";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [Route("GetAllSoftware")]
        public JsonResult GetAllSoftware()
        {
            //Simple unsafe query TO CHANGE LATER
            string query = @"select Software from dbo.Bulletins";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Bulletin bul)
        {
            //Simple unsafe query TO CHANGE LATER (How will dates work?)
            string query = @"insert into dbo.Bulletins values
                            ('" + bul.topic + @"')
                            ('" + bul.software + @"')   
                            ('" + bul.resolution + @"') 
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(Bulletin bul)
        {
            //Simple unsafe query TO CHANGE LATER (How will dates work?)
            string query = @"update dbo.Bulletins set
                            Resolution = '" + bul.resolution + @"'
                            Notes = '" + bul.notes + @"'
                            Noteimage = '" + bul.noteImage + @"'
                            where BulletinID = " + bul.identity + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            //Our delete query doesn't delete the row, it just sets IsDeleted to true at the id
            string query = @"update dbo.Bulletins set
                            IsDeleted = '" + true + @"'
                            where BulletinID = " + id + @"
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BulletinDBCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
    }
}