import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext'


const Stories = () => {

  const { currentUser } = useContext(AuthContext)

  //Temporary
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className='flex gap-2 mb-8 h-60'>
      {/* <div className='flex-1 rounded-xl overflow-hidden'>
        <img src={currentUser.image} alt='' className='w-full h-full'/>
        <span>{currentUser.name}</span>
        <button className='absolute bottom-10 left-2 text-white font-medium'>+</button>
      </div> */}
      {stories.map(story => (
        <div key={story.id} className='flex2 rounded-xl overflow-hidden relative'>
          <img src={story.img} className='w-full h-full object-cover'/>
          <span className='absolute bottom-2 left-2 text-white font-medium'>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;