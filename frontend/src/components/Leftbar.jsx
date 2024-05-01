import React from 'react';
import { LiaUserFriendsSolid, LiaStopwatchSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import { PiMonitorPlay } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";

const Leftbar = () => {
  return (
    <div className='flex1 position sticky top-12 height overflow-scroll'>
      <div className='p-5'>
        <ul className='flex flex-col gap-3'>
          <li className='flex items-center gap-x-2 text-lg'><IoPersonOutline />John Doe</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaUserFriendsSolid />Friends</li>
          <li className='flex items-center gap-x-2 text-lg'><HiOutlineUserGroup />Groups</li>
          <li className='flex items-center gap-x-2 text-lg'><CiShop />Marketplace</li>
          <li className='flex items-center gap-x-2 text-lg'><PiMonitorPlay />Watch</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaStopwatchSolid />Memories</li>
        </ul>
        <hr className='my-5'/>
        <ul className='flex flex-col gap-3'>
          <span className='text-sm'>Your shortcuts</span>
          <li className='flex items-center gap-x-2 text-lg'><IoPersonOutline />John Doe</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaUserFriendsSolid />Friends</li>
          <li className='flex items-center gap-x-2 text-lg'><HiOutlineUserGroup />Groups</li>
          <li className='flex items-center gap-x-2 text-lg'><CiShop />Marketplace</li>
          <li className='flex items-center gap-x-2 text-lg'><PiMonitorPlay />Watch</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaStopwatchSolid />Memories</li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar;
