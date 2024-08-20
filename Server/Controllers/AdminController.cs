using ApplicationData.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ApplicationData.Controllers
{
    [Route("api/AdminLogin")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicantDbContext _context;
        public AdminController(ApplicantDbContext applicantDbContext)
        {
            _context = applicantDbContext;
        }

        [HttpGet("{email}/{password}")]

        public ActionResult GetData(string email, string password)
        { 
            var data = _context.Admin.FirstOrDefault(u=>u.email == email && u.password==password);
            if (data == null)
            {
                return NotFound();
            }

            return Ok(data);
        }

    }
}
