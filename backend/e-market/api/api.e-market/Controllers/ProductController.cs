using api.e_market.Controllers.Base;
using core.e_market.Contracts;
using domain.e_market.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.e_market.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : BaseController, IBaseController<MProduct>
    {
        private readonly ICoreProduct coreProduct;

        public ProductController(ICoreProduct coreProduct)
        {
            this.coreProduct = coreProduct;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
            => await ToResponseAsync(await coreProduct.Get(id), Request.Method);

        [HttpGet]
        public async Task<IActionResult> Get(int skip = 1, int take = 10)
            => await ToResponseAsync(await coreProduct.Get(skip, take), Request.Method);

        [HttpGet("{filter}/filter")]
        public async Task<IActionResult> Get(string filter, int skip = 1, int take = 10)
            => await ToResponseAsync(await coreProduct.Get(filter, skip, take), Request.Method);

        [HttpPost]
        public async Task<IActionResult> Post(MProduct jsonObject)
            => await ToResponseAsync(await coreProduct.Post(jsonObject), Request.Method);

        [HttpPut]
        public async Task<IActionResult> Put(MProduct jsonObject)
            => await ToResponseAsync(await coreProduct.Put(jsonObject), Request.Method);

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
            => await ToResponseAsync(await coreProduct.Delete(id), Request.Method);
    }
}
