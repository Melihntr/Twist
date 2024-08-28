namespace Backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Gender { get; set; }
        public string AuthKey { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
