using entities.e_market;

namespace domain.e_market.Models
{
    public class MStock
    {
        public int Id { get; set; }
        public MProduct Product { get; set; }
        public int Quantity { get; set; }
    }
}
