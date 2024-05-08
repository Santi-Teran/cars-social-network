import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Share = () => {

  const {currentUser} = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

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
    mutationFn: (newPost) => {
      return makeRequest.post('/posts', newPost)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  });


  const handleClick = async (e) => {
    e.preventDefault();

    let img = '';
    if(file) img = await upload();
    mutation.mutate({ description, image: img })
    setDescription('')
    setFile(null)
  };

  return (
    <div className='rounded-2xl mb-5 bg-white'>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center flex3 gap-2'>
            <img src={"/upload/" +currentUser.profilePic} className='w-8 h-8 rounded-full object-cover'/>
            <input type='text' placeholder={`Whats on your mind ${currentUser.name}?`} className='w-full' onChange={(e) => setDescription(e.target.value)} value={description}/>
          </div>
          <div className='flex2 flex justify-end'>
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
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
