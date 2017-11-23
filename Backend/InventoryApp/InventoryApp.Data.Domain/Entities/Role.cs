using System;
using System.Collections.Generic;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class Role
    {
        public Role()
        {
            User = new HashSet<User>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }

        public ICollection<User> User { get; set; }
    }
}
