using System;

namespace InventoryApp.Data.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; }
        public Guid RoleId { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
    }
}
