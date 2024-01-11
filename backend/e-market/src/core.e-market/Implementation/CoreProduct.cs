using AutoMapper;
using core.e_market.Contracts;
using domain.e_market.Extensions;
using domain.e_market.Models;

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

        public Task<string> Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<string> Get(int id)
        {
            throw new NotImplementedException();
        }

        public Task<string> Get(int skip, int take)
        {
            throw new NotImplementedException();
        }

        public Task<string> Get(string filter, int skip, int take)
        {
            throw new NotImplementedException();
        }

        public Task<string> Post(MProduct model)
        {
            throw new NotImplementedException();
        }

        public Task<string> Put(MProduct model)
        {
            throw new NotImplementedException();
        }
    }
}
