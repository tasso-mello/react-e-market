import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { postProduct } from '../../services/productService';
import ProductModel from '../../models/ProductModel';

const ProductModal = ({ isOpen, onRequestClose }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const saveProduct = async () => {
        const newProduct = new ProductModel(productName, parseFloat(productPrice), 'Any description to save on database.')
        const savedProduct = await postProduct(newProduct);
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Add new product"
            >
                <h2>New Product</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </label>

                    <label>
                        Price:
                        <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    </label>
                    <button onClick={saveProduct} type="submit">Save</button>
                </form>

                <button onClick={onRequestClose}>Close</button>
            </Modal>
        </div>
    );
};

export default ProductModal;