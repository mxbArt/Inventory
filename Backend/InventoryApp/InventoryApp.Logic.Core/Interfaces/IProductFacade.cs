using System;
using System.Collections.Generic;
using InventoryApp.Logic.Domain.Dtos;
using InventoryApp.Logic.Domain.Models;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface IProductFacade
    {
        IEnumerable<ProductDto> GetProducts();
        
        ProductDto GetProduct(Guid productId);

        void ProcessWaybill(List<WaybillItemModel> waybill);
    }
}
