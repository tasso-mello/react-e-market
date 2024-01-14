import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
    <Container>

      <h1 className='text-center pb-5'>Dashboard</h1>
      
      <Row className='mt-5'>
        <Col>
          <Card border="secondary" style={{ maxWidth: '18rem' }}>
            <Card.Header><Link className='text-secondary' to="/product">Produtos</Link></Card.Header>
            <Card.Body className="text-secondary">
              <Card.Title>Primary card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="secondary" style={{ maxWidth: '18rem' }}>
          <Card.Header><Link className='text-secondary' to="/stock">Stock</Link></Card.Header>
            <Card.Body className="text-secondary">
              <Card.Title>Secondary card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;