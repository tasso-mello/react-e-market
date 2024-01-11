using api.e_market.Controllers.Base;
using core.e_market.Contracts;
using domain.e_market.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.e_market.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StockController : BaseController, IBaseController<MStock>
    {
        private readonly ICoreStock coreStock;

        public StockController(ICoreStock coreStock)
        {
            this.coreStock = coreStock;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
            => await ToResponseAsync(await coreStock.Get(id), Request.Method);

        [HttpGet]
        public async Task<IActionResult> Get(int skip = 1, int take = 10)
            => await ToResponseAsync(await coreStock.Get(skip, take), Request.Method);

        /// <summary>
        ///     This method cannot be search by text
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="skip"></param>
        /// <param name="take"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        [HttpGet("{filter}/filter")]
        public async Task<IActionResult> Get(string filter, int skip = 1, int take = 10)
            => throw new NotImplementedException("Stock cannot be search by text");

        [HttpPost]
        public async Task<IActionResult> Post(MStock jsonObject)
            => await ToResponseAsync(await coreStock.Post(jsonObject), Request.Method);

        [HttpPut]
        public async Task<IActionResult> Put(MStock jsonObject)
            => await ToResponseAsync(await coreStock.Put(jsonObject), Request.Method);

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
            => await ToResponseAsync(await coreStock.Delete(id), Request.Method);
    }
}
