﻿using System;

namespace InventoryApp.Logic.Domain.Models
{
    public class WaybillItem
    {
        public Guid CategoryId { get; set; }
        public Guid ProductId { get; set; }
//        public string ProductName { get; set; }
        public int Count { get; set; }
    }
}