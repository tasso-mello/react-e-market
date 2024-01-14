import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/Product/Product';
import StockPage from './pages/Stock/Stock';
import DashboardPage from './pages/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<DashboardPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/stock" element={<StockPage />} />
      </Routes>
    </Router>
  );
}

export default App;
