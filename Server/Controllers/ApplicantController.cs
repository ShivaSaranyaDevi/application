using ApplicationData.Data;
using ApplicationData.DTO;
using ApplicationData.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApplicationData.Controllers
{
    [Route("api/Application")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private readonly ApplicantDbContext _context;
        public ApplicantController(ApplicantDbContext applicantDbContext)
        {
            _context = applicantDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> getDetails()
        {
            var details = await _context.Application.ToListAsync(); 

            if (details== null)
            {
                return NotFound();
            }

            else return Ok(details);
        }

        [HttpPost]
        [Route("api/Post")]

        public ActionResult<Application> postdetails([FromBody] ApplicationDTO dTO)
        {
            var application = new Application
            {
                FirstName = dTO.FirstName,
                LastName = dTO.LastName,
                Gender = dTO.Gender,
                DateOfBirth = dTO.DateOfBirth,
                Email = dTO.Email,
                PhoneNumber = dTO.PhoneNumber,
                Address = dTO.Address,
                City = dTO.City,
                State = dTO.State,
                ZipCode = dTO.ZipCode,
                Country = dTO.Country,
                Nationality = dTO.Nationality,
                Applicant_image = dTO.Applicant_image
            };

            _context.Application.Add(application);
            _context.SaveChanges();
            return Ok(application);
        }

            
        [HttpDelete("{id}")]
        public ActionResult DeleteApplicant(int id)
        {
            var applicant = _context.Application.FirstOrDefault(u => u.ApplicantID == id);
            if (applicant == null)
            {
                return NotFound();
            }

            _context.Application.Remove(applicant);
            _context.SaveChanges();
            return Ok();
        }

        [HttpPut("{id}")]
 
        public ActionResult putdetails(int id, [FromBody]StatusUpdateDTO status)
        {
            var applicant = _context.Application.FirstOrDefault(u => u.ApplicantID == id);
            if (applicant == null)
            {
                return NotFound();
            }
            applicant.Status = status.Status;
            _context.Application.Update(applicant);
            _context.SaveChanges();
            return Ok(applicant);

        }

    }
}
    