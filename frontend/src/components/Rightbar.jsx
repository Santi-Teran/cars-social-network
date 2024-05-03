import React from 'react';
import { IoPersonOutline } from "react-icons/io5";


const Rightbar = () => {
  return (
    <div className='flex3 position sticky top-12 height overflow-scroll bg-gray-100 hidden sm:flex flex-col'>
      <div className='p-5'>
        <div className='p-5 shadow-lg bg-white'>
          <span>Suggestions For You</span>
          <div className='flex justify-between my-5'>
            <div className='flex items-center gap-2'>
              <IoPersonOutline />
              <span>Jane Doe</span>
            </div>
            <div className='flex gap-4'>
              <button className='border py-1 px-2 bg-gray-300'>Follow</button>
              <button className='border py-1 px-2 bg-gray-300'>Dismiss</button>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <div className='p-5 shadow-lg bg-white'>
          <span>Suggestions For You</span>
          <div className='flex justify-between my-5'>
            <div className='flex items-center gap-2'>
              <IoPersonOutline />
              <span>Jane Doe</span>
            </div>
            <div className='flex gap-4'>
              <button className='border py-1 px-2 bg-gray-300'>Follow</button>
              <button className='border py-1 px-2 bg-gray-300'>Dismiss</button>
            </div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <div className='p-5 shadow-lg bg-white'>
          <span>Suggestions For You</span>
          <div className='flex justify-between my-5'>
            <div className='flex items-center gap-2'>
              <IoPersonOutline />
              <span>Jane Doe</span>
            </div>
            <div className='flex gap-4'>
              <button className='border py-1 px-2 bg-gray-300'>Follow</button>
              <button className='border py-1 px-2 bg-gray-300'>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar;
