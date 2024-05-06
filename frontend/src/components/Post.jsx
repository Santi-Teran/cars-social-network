import React, { useState } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { IoEllipsisHorizontal, IoShareSocialOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import Comments from './Comments';


const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const liked = false;

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
              <span className='text-sm'>{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <IoEllipsisHorizontal />
        </div>
        <div className='my-5 mx-0'>
          <p>{post.description}</p>
          <img src={'./upload/' + post.image} alt='' className='w-full max-h-[500px] object-cover mt-5'/>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-2 cursor-pointer'>
            { liked ? <FaHeart className='text-red-500' /> : <FaRegHeart /> } 12 Likes
          </div>
          <div className='flex items-center gap-2 cursor-pointer' onClick={() => setCommentOpen(!commentOpen)}>
            <BiCommentDetail />12 Comments
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <IoShareSocialOutline />Share
          </div>
        </div>
        { commentOpen && <Comments id_post={post.id} />}
      </div>
    </div>
  )
}

export default Post
