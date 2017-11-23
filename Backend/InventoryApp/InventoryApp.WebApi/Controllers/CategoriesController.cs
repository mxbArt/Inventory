using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InventoryApp.Logic.Core.Facades;
using InventoryApp.Logic.Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InventoryApp.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/categories")]
    public class CategoriesController : Controller
    {
        private readonly ICategoryFacade _categoryFacade;

        public CategoriesController(ICategoryFacade categoryFacade)
        {
            _categoryFacade = categoryFacade;
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            return Ok(_categoryFacade.GetCategories());
        }

        [HttpGet("{id}")]
        public IActionResult GetProducts(Guid id)
        {
            if (id != Guid.Empty)
            {
                var tmp = _categoryFacade.GetCategoryProducts(id);
                return Ok(tmp);
            }
            return BadRequest("Wrong category id");
        }
    }
}