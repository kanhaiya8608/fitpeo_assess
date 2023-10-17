import React, { useState } from 'react';
import profile from '../images/profile.jpg'; 
import {AiOutlineDown} from 'react-icons/ai';
const Dropdown = () => {
  const dropItems = [
    { href: "#" },
    { href: "#" },
    { href: "#" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropup">
        {isOpen && (
        <ul className="bg-blue-200 p-2 rounded text-black dropup__list">
          {dropItems.map((dropItem, index) => (
            <li className="hover:bg-blue-400 rounded dropup__item text-center" key={index}>
              <a className="dropup__link" href={dropItem.href}>
                Link {index + 1}
              </a>
            </li>
          ))}
        </ul>
      )}
      <button
        className={`p-1 bg-blue-800 rounded flex justify-between w-full align-baseline dropup__btn primary-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleDropdown} 
      >
        <img className='w-8 m-2 rounded-full' src={profile} alt=""  />
        <div className='flex flex-col text-left'>
         <p className='text-sm'>Kanhaiya Verma</p>
         <p className='text-xs text-slate-400 font-bold'>Software Engineer</p>
        </div>
        <AiOutlineDown className='m-2 my-3'/>

      </button>
      
    </div>
  );
};

export default Dropdown;
