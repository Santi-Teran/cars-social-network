import React, { useContext } from 'react';
import Posts from '../components/Posts';
import { AuthContext } from '../context/authContext';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMoreVert, MdOutlineEmail } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from '../axios';
import { useLocation } from 'react-router-dom';

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  const id_user = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['user'],
    queryFn: () => makeRequest.get('/users/find/' + id_user).then((res) => {
      return res.data
    })
  });

  const { isLoading: rIsLoading, data: relationshipData} = useQuery({
    queryKey: ['relationship'],
    queryFn: () => makeRequest.get('/relationships?id_followed=' + id_user).then((res) => {
      return res.data
    })
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if(following) return makeRequest.delete('/relationships?id_user=' + id_user);
      return makeRequest.post('/relationships', { id_user })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['relationship'])
    }
  });

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
  }

  return (
    <div className='bg-gray-100 pl-5'>
      {isLoading ? ('loading') :
      (
        <>
      <div className='w-full h-80 relative'>
        <img
          src={data.coverPic}
          alt=""
          className="w-full h-full object-cover"
        />
        <img src={data.profilePic} className='w-48 h-48 rounded-full object-cover absolute left-0 right-0 m-auto top-44'/>
      </div>
      <div className='py-5 px-16'>
        <div className='flex items-center justify-between mb-5 bg-white h-44 rounded-2xl p-12'>
          <div className='flex2'></div>
          <div className='flex flex2 flex-col items-center gap-2'>
            <span className='text-3xl font-medium'>{data.name}</span>
            <div className='w-full flex items-center justify-around'>
              <div className='flex items-center gap-1'>
                <FaMapMarkerAlt />
                <span className='text-sm'>{data.city}</span>
              </div>
              <div className='flex items-center gap-1'>
                <FaMapMarkerAlt />
                <span className='text-sm'>{data.city}</span>
              </div>
            </div>
            { rIsLoading ? 'loading' : id_user === currentUser.id ? (
              <button>Update</button>
            ) : (
              <button onClick={handleFollow}>
                    {relationshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button> )
            }
          </div>
          <div className='flex2 flex items-center justify-end gap-2'>
            <MdOutlineEmail />
            <MdMoreVert />
          </div>
        </div>
        <Posts id_user={id_user}/>
      </div>
      </>
      )}
    </div>
  )
}

export default Profile;
