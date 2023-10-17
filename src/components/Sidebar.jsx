import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { PiDiamondsFourFill, PiCubeFocusLight } from 'react-icons/pi';
import { BsFilePerson } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { TbDiscount2 } from 'react-icons/tb';
import { MdOutlineLiveHelp, MdArrowForwardIos } from 'react-icons/md';
import Dropdown from './Dropdown'
function Sidebar() {

const navLinkStyles=({isActive})=>{
return{
    fontWeight: isActive ? 'bold': 'normal',
    background: isActive ? '#1D4ED8': '#312E81',
    borderRadius: isActive ? '8px' : '0',
}}

  const menus = [
    { label: 'Dashboard', icon: BiSolidDashboard, hasArrow: false, route: '/' },
    { label: 'Product', icon: PiCubeFocusLight, hasArrow: true, route: '/products' },
    { label: 'Customers', icon: BsFilePerson, hasArrow: true, route: '/c' },
    { label: 'Income', icon: BiWallet, hasArrow: true, route: '/income' },
    { label: 'Promote', icon: TbDiscount2, hasArrow: true, route: '/promote' },
    { label: 'Help', icon: MdOutlineLiveHelp, hasArrow: false, route: '/help' },
  ];


  return (
    <div className="relative hidden md:flex flex-col w-60 p-3 h-full text-white">
      <div className='flex items-center gap-2 px-1 py-3 pb-8'>
        <PiDiamondsFourFill size={30} />
        <span className='text-neutral-100 text-xl font-semibold'>Dashboard</span>
      </div>
      <div className='flex-1'>
        <ul>
          {menus.map((menu, index) => (
            <li key={index} className={` flex items-center active:bg-color-red justify-between ${location.pathname === menu.route ? 'active' : 'hover'}`}>
              <NavLink style={navLinkStyles} to={menu.route}>
                <div className='p-3 flex justify-between w-full'>
                  <div className='text-lg rounded flex items-center'>
                    {menu.icon({ size: 20 })} <span className='w-40 px-3'>{menu.label}</span>
                  </div>
                  {menu.hasArrow && <MdArrowForwardIos className='my-2' />}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='p-3 '><Dropdown/></div>
    </div>
  );
}

export default Sidebar;
