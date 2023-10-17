// Products.js

import React from 'react';
import SearchBar from '../components/SearchBar'
function ProductTable({ data }) {
  return (
    <div className='bg-white rounded- m-4 p-4'>
      <h1 className='flex text-lg font-bold'>Product Sell
      <div className='flex-grow'></div>
      <SearchBar border='none'/>
      </h1>
      <table className="text-center w-full text-lg border-spacing-0 text-gray-500 ">
      <thead className="text-md text-gray-400 se border-b-2">
          <tr>
          <th scope="col" className=" text-left px-6 py-3">Product Name</th>
             <th scope="col" className="px-6 py-3">Stock</th>
             <th scope="col" className="px-6 py-3">Price</th>
             <th scope="col" className="px-6 py-3">Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr className='text-black' key={index}>
              <td className='p-2 flex flex-row'>
              <img src={product.avatar} className='h-12 rounded-xl p-2' alt="Product Avatar" />
              <div className='text-left flex flex-col'>
                <h3 className='text-black font-bold'>{product.productName}</h3>
                <p className='text-gray-500'>{product.productDescription}</p>
                </div>
                </td>

              <td>{product.stock} in stock </td>
              <td className='font-bold'>$ {product.price}</td>
              <td>{product.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
