using System;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class User
    {
        public Guid Id { get; set; }
        public Guid RoleId { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }

        public Role Role { get; set; }
    }
}
