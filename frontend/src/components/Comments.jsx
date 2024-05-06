import React, { useContext, useState } from 'react';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Comments = ({id_post}) => {

  const [content, setContent] = useState('');

  const {currentUser} = useContext(AuthContext);

  const { isLoading, error, data } = useQuery({
    queryKey: ['comments'],
    queryFn: () => makeRequest.get('/comments?id_post=' + id_post).then((res) => {
      return res.data
    })
  });

  const queryClient = useQueryClient();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file)
      const res = await makeRequest.post('/upload', formData);
      return res.data
    } catch (error) {
      console.log(error)
    }
  };

  const mutation = useMutation({
    mutationFn: (newComment) => {
      return makeRequest.post('/comments', newComment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comment'])
    }
  });


  const handleClick = async (e) => {
    e.preventDefault();

    mutation.mutate({ content, id_post })
    setContent('')
  };

  return (
    <div className='bg-white'>
      <div className='flex items-center justify-between gap-5 my-5'>
        <img src={currentUser.image} className='w-10 h-10 rounded-full object-cover'/>
        <input type='text' placeholder='Write a commnet' className='flex5 p-2 border rounded-md' value={content} onChange={(e) => setContent(e.target.value)}/>
        <button className='border p-2 rounded-md' onClick={handleClick}>Send</button>
      </div>
      { error ? 'Something went wrong' :
          isLoading ?
          'loading' :
          data.map(comment => (
          <div className='flex justify-between my-8 gap-5'>
            <img src={comment.profilePicture} className='w-10 h-10 rounded-full object-cover'/>
            <div className='flex5 flex flex-col gap-1'>
              <span className='font-medium'>{comment.name}</span>
              <p>{comment.content}</p>
            </div>
            <span className='flex2 self-center text-gray-400 text-sm'>{moment(comment.createdAt).fromNow()}</span>
          </div>
        ))}
    </div>
  )
}

export default Comments;