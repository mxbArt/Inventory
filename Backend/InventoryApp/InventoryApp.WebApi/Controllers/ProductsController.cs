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

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productFacade.GetProducts());
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            if (id == Guid.Empty) return BadRequest($"Product with id {id} does not exists");

            try
            {
                return Ok(_productFacade.GetProduct(id));
            }
            catch (InvalidOperationException)
            {
                return BadRequest($"Product with id {id} does not exists");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [HttpPut]
        public IActionResult ProcessWaybill([FromBody]List<WaybillItemModel> waybill)
        {
            if (waybill == null || waybill.Count == 0) return BadRequest("Request contains no data");

            _productFacade.ProcessWaybill(waybill);
            return Ok();
        }
    }
}