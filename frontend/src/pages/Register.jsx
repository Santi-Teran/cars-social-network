import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex items-center h-screen bg-slate-300 justify-center '>
      <div className='flex bg-white w-1/2 rounded-xl min-h-[600px] overflow-hidden'>
      <div className='flex flex-col flex-1 gap-y-10 p-12 justify-center'>
          <h1 className='text-5xl'>Register</h1>
          <form className='flex flex-col gap-y-8'>
            <input className=' border-b px-5 py-2' type='text' placeholder='Username'/>
            <input className=' border-b px-5 py-2' type='email' placeholder='Email'/>
            <input className=' border-b px-5 py-2' type='password' placeholder='Password'/>
            <input className=' border-b px-5 py-2' type='text' placeholder='Name'/>
            <Link to='/register'>
              <button className='w-1/2 p-3 bg-purple-500 text-white font-bold'>Register</button>
            </Link>
          </form>
        </div>
        <div className='flex flex-col flex-1 gap-y-8 imagen p-12 text-white'>
          <h1 className='text-8xl '>Hello world</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor maxime excepturi id nisi tenetur, saepe inventore omnis blanditiis. Tempora maxime odit quo, accusamus repellendus voluptate perferendis cumque ut libero pariatur.
          </p>
          <span className='text-sm'>Do you have an account?</span>
          <Link to='/login'>
            <button className='w-1/2 p-3 bg-white text-purple-800 font-bold'>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register