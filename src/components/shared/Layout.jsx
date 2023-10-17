import React from 'react'
import Sidebar from '../Sidebar'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import {BiWallet, BiSolidDashboard} from 'react-icons/bi'
import {PiCubeFocusLight} from 'react-icons/pi'
import {BsFilePerson} from 'react-icons/bs';
import {TbDiscount2} from 'react-icons/tb'
import {MdOutlineLiveHelp} from 'react-icons/md'
function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
    <div className='bg-indigo-900 text-white'><Sidebar/></div>
    <div className='p-4 w-screen overflow-x-auto'>
    <div><Header/></div>    
    <div><Outlet/></div>
    </div>

    </div>
  )
}

export default Layout