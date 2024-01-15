import React, { useEffect, useState } from 'react';
import { getStocks, getStockById } from '../../services/stockService';
import StockModal from './StockModal';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import { TableHead, TableRow } from '@mui/material';
import ProductModel from '../../models/ProductModel';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [show, setShow] = useState(false);
  const [stockProduct, setStockProduct] = useState(new ProductModel());
  const [stockProductQuantity, setStockProductQuantity] = useState(0);
  const [StockId, setStockId] = useState('');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const result = await getStocks();
        setStocks(result.stock);
      } catch (error) {
        console.error('Get produtcs is not working. Try again:', error);
      }
    };

    fetchStocks();
  }, []);

  const updateStockList = async () => {
    try {
      const result = await getStocks();
      setStocks(result.stock);
    } catch (error) {
      console.error('Get Stocks is not working. Try again:', error);
    }
  };

  const editStock = async (id) => {
    const Stock = await getStockById(id);
    setStockId(id);
    setStockProduct(Stock.stock.Product);
    setStockProductQuantity(Stock.stock.Quantity);

    handleShow();
  };

  const handleClose = () => {
    updateStockList();
    setStockId('');
    setStockProduct(new ProductModel());
    setStockProductQuantity(0);  

    setShow(false);
  }

  const handleShow = () => setShow(true);

  return (
    <Container>
      <Row className='mb-5'>
        <Col>
          <Button className="btn-secondary" onClick={handleShow}>Add on Stock</Button>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <Table>
            <TableHead className="thead-dark">
              <TableRow>
                <th>Product Name</th>
                <th>Quantity</th>
              </TableRow>
            </TableHead>
            <tbody>
              {stocks.map((Stock) => (
                <tr key={Stock.Id} onDoubleClick={() => editStock(Stock.Id)}>
                  <td>
                    {Stock.Product.Name}
                  </td>
                  <td>
                    {Stock.Quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <StockModal isOpen={show} onRequestClose={handleClose} initialStockProduct={stockProduct} initialStockQuantity={stockProductQuantity} initialStockId={StockId} />
    </Container>
  );
};

export default StockList;