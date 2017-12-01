using System;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class ProductLog
    {
        public Guid Id { get; set; }
        public Guid ProductId { get; set; }
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public double Count { get; set; }

        public Product Product { get; set; }
        public User User { get; set; }
    }
}
