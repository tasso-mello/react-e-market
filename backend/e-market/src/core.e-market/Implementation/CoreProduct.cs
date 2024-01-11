using AutoMapper;
using core.e_market.Contracts;
using domain.e_market.Extensions;
using domain.e_market.Models;
using entities.e_market;
using repository.e_market.Repositories;
using System.Linq.Expressions;

namespace core.e_market.Implementation
{
    public class CoreProduct : ICoreProduct
    {
        private readonly IRepositoryProduct repositoryProduct;

        public CoreProduct(IMapper mapper, IRepositoryProduct repositoryProduct)
        {
            Conversions.mapper = mapper;
            this.repositoryProduct = repositoryProduct;
        }


        public async Task<string> Get(int id)
            => Responses.GetResponse("product", (await repositoryProduct.ReadOne(a => a.Id == id)).ToModelProduct());

        public async Task<string> Get(int skip, int take)
            => Responses.GetResponse("product", (await repositoryProduct.Read()).Select(a => a.ToModelProduct()));

        public async Task<string> Get(string filter, int skip, int take)
            => Responses.GetResponse("product", (await repositoryProduct.Read(GetFilter(filter))).Select(a => a.ToModelProduct()));

        public async Task<string> Post(MProduct model)
        {
            var entityProduct = model.ToEntityProduct();
            var productCreated = await repositoryProduct.Create(entityProduct);

            return Responses.GetCreatedResponse("product", productCreated.Id, "Product created.");
        }

        public async Task<string> Put(MProduct model)
        {
            var entityProduct = model.ToEntityProduct();
            var productUpdated = await repositoryProduct.Update(entityProduct);

            return Responses.GetCreatedResponse("product", productUpdated.Id, "Product updated.");
        }

        public async Task<string> Delete(int id)
        {
            await repositoryProduct.Delete(id);

            return Responses.GetObjectResponse("product", "Product deleted.");
        }

        private Expression<Func<Product, bool>> GetFilter(string filter)
            => p => p.Name.Contains(filter);

        private List<string> GetIncludes()
            => new List<string> { "AssociadoEmpresas", "AssociadoEmpresas.Empresa" };
    }
}
