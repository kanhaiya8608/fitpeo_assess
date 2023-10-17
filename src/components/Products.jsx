import image1 from '../images/1.jpg'; 
import image2 from '../images/2.jpg'; 
import React from 'react';
import ProductTable from './ProductTable';

function App() {
  // Sample product data
  const data = [
    {
      productName: 'Product 1',
      avatar: image1,
      productDescription: 'Description for Product 1',
      stock: 100,
      price: 60.20,
      sales: 20,
    },
    {
      productName: 'Product 2',
      avatar: image2,
      productDescription: 'Description for Product 2',
      stock: 45,
      price: 75.99,
      sales: 15,
    },
    // Add more product objects as needed
  ];

  return (
    <div className="App">
      <ProductTable data={data} />
    </div>
  );
}

export default App;
