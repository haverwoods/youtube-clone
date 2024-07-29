import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoMenu, IoVideocamOutline } from 'react-icons/io5'
import { MdAccountCircle } from 'react-icons/md'

const Navigation = () => {
  return (
    <div className=''>

      <div className="fixed top-0 left-0 right-0 z-50  flex items-center  px-4 py-2 bg-stone-900 text-white">
          <IoMenu className="flex items-center h-8 w-8 ml-2"/>
          <IoVideocamOutline className="flex items-center h-8 w-8 ml-8"/>
          <div className="flex items-center gap-3 ">
          <input type="text" className="flex items-center h-8 w-96 rounded-3xl outline-none ml-20 text-black px-3" id="input-box" placeholder="   search" /> 
          <FaSearch/>     
          </div>
          <MdAccountCircle className="flex h-8 w-8 mr-5 absolute  right-0 " />
      
      </div>
    </div>
    )
}

export default Navigation