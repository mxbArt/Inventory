using System;
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
        public IActionResult Get(bool includeProducts)
        {
            return Ok(_categoryFacade.GetCategories(includeProducts));
        }


        [HttpGet("{id}")]
        public IActionResult Get(Guid id, bool includeProducts)
        {
            if (id == Guid.Empty) return BadRequest($"Category with id {id} was not found.");

            try
            {
                var category = _categoryFacade.GetCategory(id, includeProducts);
                return Ok(category);
            }
            catch (InvalidOperationException)
            {
                return BadRequest($"Category with id {id} does not exists");
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}