using entities.e_market;

namespace domain.e_market.Models
{
    public class MStock
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public IList<MProduct> Products { get; set; }
        public int Quantity { get; set; }
    }
}
