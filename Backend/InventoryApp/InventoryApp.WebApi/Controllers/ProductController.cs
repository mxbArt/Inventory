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
    [Route("product")]
    public class ProductController : Controller
    {
        private readonly IProductFacade _productFacade;

        public ProductController(IProductFacade productFacade)
        {
            _productFacade = productFacade;
        }

        [HttpPost("processWaybill")]
        public IActionResult ProcessWaybill([FromBody]List<WaybillItem> waybill)
        {
            if (waybill != null && waybill.Count != 0)
            {
                _productFacade.ProcessWaybill(waybill);
                return Ok();
            }
            return BadRequest("Request contains no data");
        }
    }
}