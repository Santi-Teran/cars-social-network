import React, { useContext } from 'react';
import { LiaUserFriendsSolid, LiaStopwatchSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import { PiMonitorPlay } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { AuthContext } from '../context/authContext';

const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='flex1 position sticky top-12 height overflow-scroll hidden sm:flex'>
      <div className='p-5'>
        <ul className='flex flex-col gap-3'>
          <li className='flex items-center gap-x-2 text-lg'><img src={currentUser.image} className='w-5 h-5 rounded-full object-cover'/>{currentUser.name}</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaUserFriendsSolid />Friends</li>
          {/* <li className='flex items-center gap-x-2 text-lg'><HiOutlineUserGroup />Groups</li> */}
          <li className='flex items-center gap-x-2 text-lg'><CiShop />Marketplace</li>
          <li className='flex items-center gap-x-2 text-lg'><PiMonitorPlay />Watch</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaStopwatchSolid />Memories</li>
        </ul>
        <hr className='my-5'/>
        <ul className='flex flex-col gap-3'>
          <span className='text-sm'>Your shortcuts</span>
          <li className='flex items-center gap-x-2 text-lg'><IoPersonOutline />John Doe</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaUserFriendsSolid />Friends</li>
          {/* <li className='flex items-center gap-x-2 text-lg'><HiOutlineUserGroup />Groups</li> */}
          <li className='flex items-center gap-x-2 text-lg'><CiShop />Marketplace</li>
          <li className='flex items-center gap-x-2 text-lg'><PiMonitorPlay />Watch</li>
          <li className='flex items-center gap-x-2 text-lg'><LiaStopwatchSolid />Memories</li>
        </ul>
      </div>
    </div>
  )
}

export default Leftbar;
