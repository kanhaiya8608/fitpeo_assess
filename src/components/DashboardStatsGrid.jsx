import React from 'react';
import { FaBagShopping, FaDollarSign, FaWallet, FaArrowUp, FaArrowDown } from 'react-icons/fa6';
import {PiNotebookLight} from 'react-icons/pi'
function DashboardStatsGrid() {
  const boxesData = [
    {
      title: 'Earning',
      amount: '$198k',
      iconColor: 'text-green-700',
      iconBgColor: 'bg-green-100',
      iconSize: '80px',
      icon: <FaDollarSign size='72' className='p-3 m-3 rounded-full font-bold text-lg text-green-700 bg-green-100 overflow-visible' />,
      arrowIcon: <FaArrowUp/>,
      text: '37.8%',
      stat: 'profit',
    },
    {
      title: 'Orders',
      amount: '$2.4k',
      iconColor: 'text-green-700',
      iconBgColor: 'bg-green-100',
      iconSize: '80px',
icon: <PiNotebookLight size='72' className='p-3 m-3 rounded-full font-bold text-lg text-violet-800 bg-purple-300 overflow-visible' />,
      arrowIcon: <FaArrowDown  />,
      text: '2%',
      stat: 'loss',
    },
    {
      title: 'Balance',
      amount: '$2.4k',
      iconColor: 'text-blue-700',
      iconBgColor: 'bg-blue-100',
      iconSize: '80px',
      icon: <FaWallet size='72' className='p-3 m-3 rounded-full font-bold text-lg text-blue-700 bg-blue-100 overflow-visible' />,
      arrowIcon: <FaArrowDown className='' />,
      text: '2%',
      stat: 'loss',
    },
 
    {
      title: 'Total Sales',
      amount: '$89k',
      iconColor: 'text-blue-700',
      iconBgColor: 'bg-blue-100',
      iconSize: '80px',
      icon: <FaBagShopping size='72' className='p-3 m-3 rounded-full font-bold text-lg text-pink-800 bg-pink-300 overflow-visible' />,
      arrowIcon: <FaArrowUp />,
      text: '11%',
      stat: 'profit',
    },
    
  ];

  return (
    <div className='flex flex-wrap justify-between m-4 gap-4'>
      {boxesData.map((box, index) => (
        <div key={index} className='rounded flex items-center p-2 bg-white w-72'>
          {box.icon}
          <div className='flex flex-col'>
            <p className='text-sm text-slate-400'>{box.title}</p>
            <h3 className='text-2xl font-bold leading-10'>{box.amount}</h3>
            <p className={`flex leading-4 ${box.stat === 'profit' ? 'text-green-500' : 'text-red-500'}`}>
              {box.arrowIcon}
              <span className='px-1 font-extrabold'>{box.text}</span>
              <p className='text-black'>this month</p>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardStatsGrid;
