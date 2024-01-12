import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { postProduct, putProduct, deleteProduct } from '../../services/productService';
import ProductModel from '../../models/ProductModel';

const ProductModal = ({ isOpen, onRequestClose, initialProductName, initialProductPrice, initialProductId }) => {
    const [productName, setProductName] = useState(initialProductName || '');
    const [productPrice, setProductPrice] = useState(initialProductPrice || '');
    const [productId, setProductId] = useState(initialProductId || '');

    useEffect(() => {
        // Atualiza os estados locais quando as propriedades iniciais mudam
        setProductName(initialProductName || '');
        setProductPrice(initialProductPrice || '');
        setProductId(initialProductId || '');
    }, [initialProductName, initialProductPrice]);

    const saveProduct = async () => {
        if(!productId){
            const newProduct = new ProductModel(productName, parseFloat(productPrice), 'Any description to save on database.')
            const savedProduct = await postProduct(newProduct);
        }
        else{
            const editProduct = new ProductModel(productName, parseFloat(productPrice), 'Any description to edit on database.', productId)
            const editedProduct = await putProduct(editProduct);
        }
    };

    const removeProduct = async() => {
        if(productId){
            const deletedProduct = await deleteProduct(productId);
        }
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
                    <button onClick={removeProduct} type="submit">Delete</button>
                </form>

                <button onClick={onRequestClose}>Close</button>
            </Modal>
        </div>
    );
};

export default ProductModal;