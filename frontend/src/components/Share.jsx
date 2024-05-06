import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Share = () => {

  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const {currentUser} = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return makeRequest.post('/posts', newPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  });

  const handleClick = e => {
    e.preventDefault();

    mutation.mutate({description})
  };

  return (
    <div className='rounded-2xl mb-5 bg-white'>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex3'>
            <img src='currentuser'/>
            <input type='text' placeholder={`Whats on your mind ${currentUser.name}?`} className='w-full' onChange={(e) => setDescription(e.target.value)} value={description}/>
          </div>
          <div className='flex2 flex justify-end'>

          </div>
        </div>
        <hr className='my-5'/>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <input type='file' id='file' onChange={(e) => setFile(e.target.files[0])}/>
            <label htmlFor="file">
              <div className='flex items-center gap-2'>
                <img />
                <span>Add Image</span>
              </div>
            </label>
            <div className='flex items-center gap-2'>
              <img />
              <span>Add Place</span>
            </div>
            <div className='flex items-center gap-2'>
              <img />
              <span>Tag Friends</span>
            </div>
          </div>
          <div >
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share
