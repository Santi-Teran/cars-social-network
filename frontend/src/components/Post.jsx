import React from 'react';
import { Link } from 'react-router-dom';
import { IoEllipsisHorizontal } from "react-icons/io5";

const Post = ({post}) => {
  return (
    <div className='rounded-2xl bg-white'>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-5'>
            <img src={post.profilePic} alt='' className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex flex-col'>
              <Link to={`/profile/${post.userId}`}>
                <span className='font-medium'>{post.name}</span>
              </Link>
              <span className='text-sm'>1 min ago</span>
            </div>
          </div>
          <IoEllipsisHorizontal />
        </div>
        <div className='my-5 mx-0'>
          <p>{post.desc}</p>
          <img src={post.img} alt='' className='w-full max-h-[500px] object-cover mt-5'/>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Post
