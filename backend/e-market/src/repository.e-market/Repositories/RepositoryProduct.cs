using entities.e_market;
using repository.e_market.Context;
using repository.e_market.Infrastructure;

namespace repository.e_market.Repositories;

public interface IRepositoryProduct : IRepository<Product> { }

public class RepositoryProduct : Repository<Product>, IRepositoryProduct
{
    public RepositoryProduct(ApplicationDbContext dbContext) : base(dbContext) { }
}
