using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApp.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/products")]
    public class ProductsController : Controller
    {
        private readonly IProductFacade _productFacade;

        public ProductsController(IProductFacade productFacade)
        {
            _productFacade = productFacade;
        }

        [HttpPut()]
        public IActionResult ProcessWaybill([FromBody]List<WaybillItemModel> waybill)
        {
            if (waybill == null || waybill.Count == 0) return BadRequest("Request contains no data");

            _productFacade.ProcessWaybill(waybill);
            return Ok();
        }
    }
}