import React, { useEffect, useState } from 'react';
import { getProducts, getProductById } from '../../services/productService';
import ProductModal from './ProductModal';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { TableHead, TableRow } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
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

  const updateProductList = async () => {
    try {
      const result = await getProducts();
      setProducts(result.product);
    } catch (error) {
      console.error('Get products is not working. Try again:', error);
    }
  };

  const editProduct = async (id) => {
    const product = await getProductById(id);
    setProductId(id);
    setProductName(product.product.Name);
    setProductPrice(product.product.Price);

    handleShow();
  };

  const handleClose = () => {
    updateProductList();
    setProductId('');
    setProductName('');
    setProductPrice('');  

    setShow(false);
  }

  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mb-5'>
        <Col>
          <Button className="btn-secondary" onClick={handleShow}>New product</Button>
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
                <tr key={product.Id} onDoubleClick={() => editProduct(product.Id)}>
                  <td>
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
      <ProductModal isOpen={show} onRequestClose={handleClose} initialProductName={productName} initialProductPrice={productPrice} initialProductId={productId} />
    </Container>
  );
};

export default ProductList;