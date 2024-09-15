namespace App.API.Models
{
    public class CreateUserRequest
    {
        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public string PhoneNumber { get; set; } = null!;

        public string? Email { get; set; }

        public string Password { get; set; } = null!;
    }



}
