import React, { useContext, useState } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom';
import { IoEllipsisHorizontal, IoShareSocialOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import Comments from './Comments';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';
import { AuthContext } from '../context/authContext';


const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ['likes', post.id],
    queryFn: () => makeRequest.get('/likes?id_post=' + post.id).then((res) => {
      return res.data
    })
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (liked) => {
      if(liked) return makeRequest.delete('/likes?id_post=' + post.id);
      return makeRequest.post('/likes', { id_post: post.id })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['likes'])
    }
  });

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id))
  }

  return (
    <div className='rounded-2xl bg-white'>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-5'>
            <img src={'/upload/' + post.profilePic} alt='' className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex flex-col'>
              <Link to={`/profile/${post.id_user}`}>
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
          {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FaHeart
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <FaRegHeart onClick={handleLike} />
            )}
            {data?.length} Likes
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
