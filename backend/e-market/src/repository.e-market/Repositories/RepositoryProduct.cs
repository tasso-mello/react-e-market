using entities.e_market;
using repository.e_market.Context;
using repository.e_market.Infrastructure;

namespace repository.e_market.Repositories;

public interface IProductRepository : IRepository<Product> { }

public class ProductRepository : Repository<Product>, IProductRepository
{
    public ProductRepository(ApplicationDbContext dbContext) : base(dbContext) { }
}
