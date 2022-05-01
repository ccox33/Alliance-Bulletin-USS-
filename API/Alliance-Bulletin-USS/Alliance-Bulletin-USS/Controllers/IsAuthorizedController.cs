using Alliance_Bulletin_USS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Alliance_Bulletin_USS.Repositories;

namespace Alliance_Bulletin_USS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class IsAuthorizedController : ControllerBase
    {

        IsAuthorizedRepository _isAuthorizedRepo;
        private readonly IConfiguration _configuration;

        public IsAuthorizedController(IConfiguration configuration)
        {
            _configuration = configuration;
            _isAuthorizedRepo = new IsAuthorizedRepository();
        }

        [AllowAnonymous]
        [HttpGet("GetAuthorized")]
        public IActionResult GetAuthorized(String testEmail)
        {
            List<isAuthorized> authorized = _isAuthorizedRepo.GetAuthorized();

            foreach (var authorizedEmail in authorized)
            {
                if (testEmail == authorizedEmail.UserEmail)
                {
                    return Ok(true);
                }
            }

            return Ok(false);
        }
    }
}
