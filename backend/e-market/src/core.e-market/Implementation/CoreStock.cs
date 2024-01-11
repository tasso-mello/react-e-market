using core.e_market.Contracts;
using domain.e_market.Models;

namespace core.e_market.Implementation
{
    public class CoreStock : ICoreStock
    {
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

        public Task<string> Post(MStock model)
        {
            throw new NotImplementedException();
        }

        public Task<string> Put(MStock model)
        {
            throw new NotImplementedException();
        }
    }
}
