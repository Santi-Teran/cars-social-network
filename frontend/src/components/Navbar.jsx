import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { IoHomeOutline, IoMoonOutline, IoSearch, IoPersonOutline, IoMailOutline } from "react-icons/io5";
import { AiOutlineAppstore, AiOutlineBell  } from "react-icons/ai";
import { AuthContext } from '../context/authContext';


const Navbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='flex justify-between px-5 py-2 h-12 border-b sticky top-0 bg-white z-10'>
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
        <div className='flex items-center gap-x-2 font-semibold ml-4'>
          <img src={currentUser.image} className='w-8 h-8 rounded-full object-cover'/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
