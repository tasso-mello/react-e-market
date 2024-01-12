class ProductModel {
  constructor(name, price, Description, id) {
    this.Id = id || 0;
    this.Name = name;
    this.Price = price;
    this.Description = Description;
  }
}

export default ProductModel;