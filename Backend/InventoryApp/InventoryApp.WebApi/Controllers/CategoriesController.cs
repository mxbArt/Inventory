using System;
using InventoryApp.Logic.Core.Interfaces;
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
        public IActionResult Get()
        {
            return Ok(_categoryFacade.GetCategories());
        }


        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            if (id != Guid.Empty)
            {
                var tmp = _categoryFacade.GetCategoryWithProducts(id);
                return Ok(tmp);
            }
            return BadRequest($"Category with {id} was not found.");
        }
    }
}