import React, { useContext } from 'react';
import Posts from '../components/Posts';
import { AuthContext } from '../context/authContext';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMoreVert, MdOutlineEmail } from "react-icons/md";

const Profile = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className='bg-gray-100 pl-5'>
      <div className='w-full h-80 relative'>
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-full object-cover"
        />
        <img src={currentUser.image} className='w-48 h-48 rounded-full object-cover absolute left-0 right-0 m-auto top-44'/>
      </div>
      <div className='py-5 px-16'>
        <div className='flex items-center justify-between mb-5 bg-white h-44 rounded-2xl p-12'>
          <div className='flex2'></div>
          <div className='flex flex2 flex-col items-center gap-2'>
            <span className='text-3xl font-medium'>{currentUser.name}</span>
            <div className='w-full flex items-center justify-around'>
              <div className='flex items-center gap-1'>
                <FaMapMarkerAlt />
                <span className='text-sm'>USA</span>
              </div>
              <div className='flex items-center gap-1'>
                <FaMapMarkerAlt />
                <span className='text-sm'>USA</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className='flex2 flex items-center justify-end gap-2'>
            <MdOutlineEmail />
            <MdMoreVert />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile;
