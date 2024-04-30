import React from 'react';
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoMoonOutline, IoSearch, IoPersonOutline, IoMailOutline } from "react-icons/io5";
import { AiOutlineAppstore, AiOutlineBell  } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className='flex justify-between px-5 py-2 h-12 border-b'>
      <div className='flex items-center gap-x-8'>
        <Link to='/'>
          <span className='font-bold text-xl text-indigo-900'>cars social</span>
        </Link>
        <IoHomeOutline />
        <IoMoonOutline />
        <AiOutlineAppstore />
        <div className='flex items-center gap-x-2 border rounded p-1'>
          <IoSearch />
          <input type='text' placeholder='Search...' className='outline-none w-[500px]' />
        </div>
      </div>
      <div className='flex items-center gap-x-8'>
        <IoPersonOutline />
        <IoMailOutline />
        <AiOutlineBell />
        <div className='flex items-center gap-x-2 font-semibold'>
          <img src='https://wallpapercave.com/wp/wp13386432.png' alt='Profile' className='w-8 h-8 rounded-full object-cover' />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
