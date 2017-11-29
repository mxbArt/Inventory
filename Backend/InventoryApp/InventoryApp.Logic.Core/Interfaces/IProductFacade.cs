using System;
using System.Collections.Generic;
using InventoryApp.Logic.Domain.Dtos;
using InventoryApp.Logic.Domain.Models;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface IProductFacade
    {
        ProductDto GetProduct(Guid productId);

        void ProcessWaybill(List<WaybillItem> waybill);
    }
}
