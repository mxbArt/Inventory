using System;
using System.Collections.Generic;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class User
    {
        public User()
        {
            ProductLog = new HashSet<ProductLog>();
        }

        public Guid Id { get; set; }
        public Guid RoleId { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }

        public Role Role { get; set; }
        public ICollection<ProductLog> ProductLog { get; set; }
    }
}
