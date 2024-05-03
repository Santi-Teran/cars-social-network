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
    <div className='flex gap-2 mb-8 sm:h-60 h-12 justify-between sm:justify-normal'>
      <div className='sm:flex2 sm:rounded-lg overflow-hidden relative flex-none rounded-full'>
        <img src={currentUser.image} alt='' className='sm:w-full sm:h-full w-12 h-12 object-cover'/>
        <span className='absolute bottom-2 left-2 text-white font-medium hidden sm:flex'>{currentUser.name}</span>
        <button className='absolute bottom-10 left-2 text-white font-medium'>+</button>
      </div>
      {stories.map(story => (
        <div key={story.id} className='sm:flex2 sm:rounded-lg overflow-hidden relative flex-none rounded-full'>
          <img src={story.img} className='sm:w-full sm:h-full w-12 h-12 object-cover'/>
          <span className='absolute bottom-2 left-2 text-white font-medium hidden sm:flex'>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories;