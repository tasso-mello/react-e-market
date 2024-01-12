import React, { useEffect, useState } from 'react';
import ProductModal from './ProductModal';
import { getProductById } from '../../services/productService';

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');

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

  const editProduct = async (id) => {
    const product = await getProductById(id);
    setProductId(id);
    setProductName(product.product.Name);
    setProductPrice(product.product.Price);

    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <tr onDoubleClick={() => editProduct(product.Id)} style={thTdStyle}>
        <td>{product.Name}</td>
        <td>{product.Price}</td>
      </tr>
      <ProductModal isOpen={isModalOpen} onRequestClose={closeModal} initialProductName={productName} initialProductPrice={productPrice} initialProductId={productId} />
    </div>
  );
};

export default Product;