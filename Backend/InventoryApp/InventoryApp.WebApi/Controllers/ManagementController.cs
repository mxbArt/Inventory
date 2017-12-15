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
    [Route("api/management")]
    public class ManagementController : Controller
    {
        private readonly IManagementFacade _managementFacade;

        public ManagementController(IManagementFacade managementFacade)
        {
            _managementFacade = managementFacade;
        }

        [HttpPut("entities")]
        public IActionResult Update([FromBody]UpdatedItemsModel updatedItems)
        {
            if (updatedItems == null || !updatedItems.UpdatedProducts.Any() && !updatedItems.UpdatedCategories.Any())
                return BadRequest("Request contains no data");

            _managementFacade.UpdateItems(updatedItems);

            return Ok();
        }
    }
}