import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product/Product';
import StockPage from './pages/Stock/Stock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StockPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/stocks" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
