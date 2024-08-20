using System.ComponentModel.DataAnnotations;

namespace ApplicationData.Models
{
    public class Admin
    {
        [Key]
        public int Admin_id {  get; set; }
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
