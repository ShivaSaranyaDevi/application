using ApplicationData.Models;
using Microsoft.EntityFrameworkCore;

namespace ApplicationData.Data
{
    public class ApplicantDbContext : DbContext
    {
        public ApplicantDbContext(DbContextOptions dbContextOptions) : base (dbContextOptions)
        {
            
        }

        public DbSet<Application> Application {  get; set; }
        public DbSet<Admin> Admin { get; set; }

    }
}
