import React from 'react';
import StockList from '../../components/Stock/StockList';

const StockPage = () => {
  return (
    <div>
      <h1 className='text-center pb-5'>Stock</h1>
      <StockList />
    </div>
  );
};

export default StockPage;