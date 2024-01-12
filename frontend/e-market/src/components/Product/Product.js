import React from 'react';

const Product = ({ product }) => {

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  };

  const thStyle = {
    ...thTdStyle,
    backgroundColor: '#f2f2f2',
  };

  const responsiveStyle = {
    '@media (max-width: 600px)': {
      th: {
        display: 'block',
        width: '100%',
      },
      td: {
        display: 'block',
        width: '100%',
      },
    },
  };

  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Product Name</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr id={product.Id} style={thTdStyle}>
            <td>{product.Name}</td>
            <td>{product.Price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Product;