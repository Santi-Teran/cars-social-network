import React, { useContext } from 'react';
import { AuthContext } from '../context/authContext';

const Comments = () => {

  const {currentUser} = useContext(AuthContext)

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div>
      <div className='flex items-center justify-between gap-5 my-5'>
        <img src={currentUser.image} className='w-10 h-10 rounded-full object-cover'/>
        <input type='text' placeholder='Write a commnet' className='flex5 p-2 border rounded-md'/>
        <button className='border p-2 rounded-md'>Send</button>
      </div>
      { comments.map(comment => (
          <div className='flex justify-between my-8 gap-5'>
            <img src={comment.profilePicture} className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex5 flex flex-col gap-1'>
              <span className='font-medium'>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className='flex2 self-center text-gray-400 text-sm'>1 hour ago</span>
          </div>
        ))}
    </div>
  )
}

export default Comments;