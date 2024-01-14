import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/productService';
import Product from './Product';
import { getProductById } from '../../services/productService';
import ProductModal from './ProductModal';
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';
import { TableHead, TableRow } from '@mui/material';

  const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productId, setProductId] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getProducts();
        setProducts(result.product);
      } catch (error) {
        console.error('Get produtcs is not working. Try again:', error);
      }
    };

    fetchProducts();
  }, []);

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
    <Container>
      <Row className='mb-5'>
        <Col>
          <button>teste</button>
          {/* <Button className="btn-secondary" onClick={openModal}>New product</Button> */}
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Table>
            <TableHead className="thead-dark">
              <TableRow>
                <th>Product Name</th>
                <th>Price</th>
              </TableRow>
            </TableHead>
            <tbody>
              {products.map((product) => (
                <tr onDoubleClick={() => editProduct(product.Id)}>
                  <td>
                    <ProductModal isOpen={isModalOpen} onRequestClose={closeModal} initialProductName={productName} initialProductPrice={productPrice} initialProductId={productId} />
                    {product.Name}
                  </td>
                  <td>
                    {product.Price}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <ProductModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </Container>
  );
};

export default ProductList;