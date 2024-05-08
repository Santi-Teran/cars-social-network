import React, { useState } from 'react'
import { makeRequest } from '../axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Update = ({ setOpenUpdate, user }) => {

  const [texts, setTexts] = useState({
    name: user.name || '',
    city: user.city || '',
    username: user.username || '',
  });  
  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(null);

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file)
      const res = await makeRequest.post('/upload', formData);
      return res.data
    } catch (error) {
      console.log(error)
    }
  };

  const handleChange = e => {
    setTexts((prev) => ({ ...prev, [e.target.name] : [e.target.value ]}))
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (user) => {
      return makeRequest.put('/users', user)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user'])
    }
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    let profileUrl;
    let coverUrl;

    coverUrl = coverPic ? await upload(coverPic) : user.coverPic;
    profileUrl = profilePic ? await upload(profilePic) : user.profilePic;

    mutation.mutate({ ...texts, profilePic: profileUrl, coverPic: coverUrl })
    setOpenUpdate(false);
  };

  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 m-auto w-1/2 h-1/2 bg-white p-10 z-10'>
      <form>
        <input type='text' value={texts.name} name='name' onChange={handleChange} />
        <input type='text' value={texts.city} name='city' onChange={handleChange} />
        <input type='text' value={texts.username} name='username' onChange={handleChange} />
        <input type='file' name='profilePic' onChange={e => setProfilePic(e.target.files[0])} />
        <input type='file' name='coverPic' onChange={e => setCoverPic(e.target.files[0])} />
        <button onClick={handleSubmit}>Update</button>
      </form>
      <button onClick={() => setOpenUpdate(false)}>X</button>
    </div>
  )
}

export default Update;
