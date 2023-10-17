import React from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import SearchBar from '../SearchBar'
function Header() {
  return (
  <div className='p-3 flex justify-between '>
    <h3 className='text-xl font-semibold'>Hello, Kanhaiya 👋</h3>
    <div className='flex-grow'></div>
 <SearchBar/>
  </div>
  )
}

export default Header