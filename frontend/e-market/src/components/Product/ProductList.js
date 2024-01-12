import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import Product from './Product';
import ProductModal from './ProductModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts();
      setProducts(result.product);
    };

    fetchProducts();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>New product</button>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <ProductModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default ProductList;