using Alliance_Bulletin_USS.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Alliance_Bulletin_USS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {

        [HttpPost("getToken")]
        public IActionResult GetToken(User user)
        {

            var tokenString = "";
            return Ok(new {Token = tokenString});
        }

    }
}
