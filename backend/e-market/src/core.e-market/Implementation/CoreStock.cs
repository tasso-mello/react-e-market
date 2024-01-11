using AutoMapper;
using core.e_market.Contracts;
using domain.e_market.Extensions;
using domain.e_market.Models;
using entities.e_market;
using repository.e_market.Repositories;
using System.Linq.Expressions;

namespace core.e_market.Implementation
{
    public class CoreStock : ICoreStock
    {
        private readonly IRepositoryStock repositoryStock;

        public CoreStock(IMapper mapper, IRepositoryStock repositoryStock)
        {
            Conversions.mapper = mapper;
            this.repositoryStock = repositoryStock;
        }

        public async Task<string> Get(int id)
            => Responses.GetResponse("stock", (await repositoryStock.ReadOne(a => a.Id == id, GetIncludes())).ToModelStock());

        public async Task<string> Get(int skip, int take)
            => Responses.GetResponse("stock", (await repositoryStock.Read(GetIncludes())).Select(a => a.ToModelStock()));

        public async Task<string> Get(string filter, int skip, int take)
            => throw new NotImplementedException("Stock cannot be search by text");

        public async Task<string> Post(MStock model)
        {
            var entityStock = model.ToEntityStock();
            var StockCreated = await repositoryStock.Create(entityStock);

            return Responses.GetCreatedResponse("stock", StockCreated.Id, "Stock created.");
        }

        public async Task<string> Put(MStock model)
        {
            var entityStock = model.ToEntityStock();
            var StockUpdated = await repositoryStock.Update(entityStock);

            return Responses.GetCreatedResponse("stock", StockUpdated.Id, "Stock updated.");
        }

        public async Task<string> Delete(int id)
        {
            await repositoryStock.Delete(id);

            return Responses.GetObjectResponse("stock", "Stock deleted.");
        }

        private List<string> GetIncludes()
            => new List<string> { "Products" };
    }
}
