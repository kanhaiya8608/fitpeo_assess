
import React from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'
function SearchBar() {
  return (
    <div>    <div className="relative">
    <input
      type="text"
      className="w-64 pl-10 pr-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search..."
    />
    <div className="absolute left-3 top-3">
    <HiMagnifyingGlass size='20'/>
    </div>

    </div>
  </div>
  )
}

export default SearchBar