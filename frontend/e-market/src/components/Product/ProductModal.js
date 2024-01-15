import React, { useEffect, useState } from 'react';
import { postProduct, putProduct, deleteProduct } from '../../services/productService';
import ProductModel from '../../models/ProductModel';
import { Row, Button, Modal } from 'react-bootstrap';

const ProductModal = ({ isOpen, onRequestClose, initialProductName, initialProductPrice, initialProductId }) => {
    const [productName, setProductName] = useState(initialProductName || '');
    const [productPrice, setProductPrice] = useState(initialProductPrice || '');
    const [productId, setProductId] = useState(initialProductId || '');

    useEffect(() => {
        setProductName(initialProductName || '');
        setProductPrice(initialProductPrice || '');
        setProductId(initialProductId || '');
    }, [initialProductName, initialProductPrice, initialProductId]);

    const saveProduct = async () => {
        if (!productId) {
            const newProduct = new ProductModel(productName, parseFloat(productPrice), 'Any description to save on database.')
            await postProduct(newProduct);
        }
        else {
            const editProduct = new ProductModel(productName, parseFloat(productPrice), 'Any description to edit on database.', productId)
            await putProduct(editProduct);
        }

        onRequestClose();
    };

    const removeProduct = async () => {
        if (productId)
            await deleteProduct(productId);

        onRequestClose();
    };

    return (
        <div>
            <Modal show={isOpen} onHide={onRequestClose} centered>
                <Modal.Header closeButton>
                {productId && (
                    <Modal.Title>{productId ? 'Edit Product' : 'New Product'}</Modal.Title>
                )}
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <label>
                            Name:
                            <input className='form-control' type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Price:
                            <input className='form-control' type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </label>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onRequestClose}>
                        Close
                    </Button>
                    <Button onClick={saveProduct} variant="primary">Save</Button>
                    {productId && (
                        <Button onClick={removeProduct} variant="danger">Delete</Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ProductModal;