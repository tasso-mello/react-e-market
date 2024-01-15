import React, { useEffect, useState } from 'react';
import { postStock, putStock, deleteStock } from '../../services/stockService';
import StockModel from '../../models/StockModel';
import ProductModel from '../../models/ProductModel';
import { Row, Button, Modal } from 'react-bootstrap';

const StockModal = ({ isOpen, onRequestClose, initialStockProduct, initialStockQuantity, initialStockId }) => {
    const [stockProduct, setStockProduct] = useState(initialStockProduct || new ProductModel());
    const [stockQuantity, setStockQuantity] = useState(initialStockQuantity || 0);
    const [stockId, setStockId] = useState(initialStockId || '');

    useEffect(() => {
        setStockProduct(initialStockProduct || new ProductModel());
        setStockQuantity(initialStockQuantity || 0);
        setStockId(initialStockId || '');
    }, [initialStockProduct, initialStockQuantity, initialStockId]);

    const saveStock = async () => {
        if (!stockId) {
            const newStock = new StockModel(stockProduct, parseFloat(stockQuantity))
            await postStock(newStock);
        }
        else {
            const editStock = new StockModel(stockProduct, parseFloat(stockQuantity), stockId)
            await putStock(editStock);
        }

        onRequestClose();
    };

    const removeStock = async () => {
        if (stockId)
            await deleteStock(stockId);

        onRequestClose();
    };

    return (
        <div>
            <Modal show={isOpen} onHide={onRequestClose} centered>
                <Modal.Header closeButton>
                {stockId && (
                    <Modal.Title>{stockId ? 'Edit Stock' : 'New Stock'}</Modal.Title>
                )}
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <label>
                            Product:
                            <input className='form-control' type="text" value={stockProduct.Name} onChange={(e) => setStockProduct({ ...stockProduct, Name: e.target.value })} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Quantity:
                            <input className='form-control' type="number" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
                        </label>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onRequestClose}>
                        Close
                    </Button>
                    <Button onClick={saveStock} variant="primary">Save</Button>
                    {stockId && (
                        <Button onClick={removeStock} variant="danger">Delete</Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default StockModal;