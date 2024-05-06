import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import { IoHomeOutline, IoMoonOutline, IoSearch, IoPersonOutline, IoMailOutline, IoLogOutOutline } from "react-icons/io5";
import { AiOutlineAppstore, AiOutlineBell  } from "react-icons/ai";
import { AuthContext } from '../context/authContext';


const Navbar = () => {

  const [error, setError] = useState(null);

  const {currentUser} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/logout');
      // Eliminar información de usuario del localStorage
      localStorage.removeItem("user");
      // Redirigir a la página de inicio de sesión
      navigate('/login')
    } catch (error) {
      setError(error.message);
    }
  };

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
          <input type='text' placeholder='Search...' className='outline-none w-[500px] hidden sm:flex' />
        </div>
      </div>
      <div className='items-center gap-x-8 hidden sm:flex'>
        <IoPersonOutline />
        <IoMailOutline />
        <AiOutlineBell />
        <button onClick={handleLogout}>
          <IoLogOutOutline />
        </button>
        <div className='flex items-center gap-x-2 font-semibold ml-4'>
          <img src={currentUser.image} className='w-8 h-8 rounded-full object-cover'/>
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
