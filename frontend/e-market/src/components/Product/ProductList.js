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

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
  };

  const responsiveStyle = {
    '@media (max-width: 600px)': {
      th: {
        display: 'block',
        width: '100%',
      },
      td: {
        display: 'block',
        width: '100%',
      },
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>New product</button>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody style={tableStyle}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
      <ProductModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default ProductList;