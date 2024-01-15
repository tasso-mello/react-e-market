import React, { useEffect, useState } from 'react';
import ProductModal from './ProductModal';
import { getProductById } from '../../services/productService';

const Product = ({ product }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');


  const editProduct = async (id) => {
    const product = await getProductById(id);
    setProductId(id);
    setProductName(product.product.Name);
    setProductPrice(product.product.Price);

    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <tr onDoubleClick={() => editProduct(product.Id)}>
        <td>{product.Name}</td>
        <td>{product.Price}</td>
      </tr>
      <ProductModal isOpen={show} onRequestClose={handleClose} initialProductName={productName} initialProductPrice={productPrice} initialProductId={productId} />
    </div>
  );
};

export default Product;