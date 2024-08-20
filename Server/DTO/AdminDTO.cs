using System.ComponentModel.DataAnnotations;

namespace ApplicationData.DTO
{
    public class AdminDTO
    {
        [Required]
        public string Admin_Name { get; set; }
        [Required]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string Admin_image { get; set; }
    }
}
