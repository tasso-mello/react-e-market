// import React, { useEffect, useState } from 'react';
// import { getStocks } from '../../services/StockService';
// import Stock from './Stock';
// import StockModal from './StockModal';

// const StockList = () => {
//   const [Stocks, setStocks] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchStocks = async () => {
//       const result = await getStocks();
//       setStocks(result.Stock);
//     };

//     fetchStocks();
//   }, []);

//   const tableStyle = {
//     width: '100%',
//     borderCollapse: 'collapse',
//     marginBottom: '20px',
//   };

//   const thTdStyle = {
//     padding: '12px',
//     textAlign: 'left',
//     borderBottom: '1px solid #ddd',
//   };

//   const thStyle = {
//     ...thTdStyle,
//     backgroundColor: '#f2f2f2',
//   };

//   const responsiveStyle = {
//     '@media (max-width: 600px)': {
//       th: {
//         display: 'block',
//         width: '100%',
//       },
//       td: {
//         display: 'block',
//         width: '100%',
//       },
//     },
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>New Stock</button>
//       <table style={tableStyle}>
//         <thead>
//           <tr>
//             <th style={thStyle}>Stock Name</th>
//             <th style={thStyle}>Price</th>
//           </tr>
//         </thead>
//         <tbody style={tableStyle}>
//           {Stocks.map((Stock) => (
//             <Stock key={Stock.id} Stock={Stock} />
//           ))}
//         </tbody>
//       </table>
//       <StockModal isOpen={isModalOpen} onRequestClose={closeModal} />
//     </div>
//   );
// };

// export default StockList;