import React from 'react';
import Post from "./Post";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../axios';

const Posts = () => {

  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get('/posts').then((res) => {
      return res.data
    })
  });

  console.log(data);

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return <div className="flex flex-col gap-12">
    {
      data.map(post=>(
        <Post post={post} key={post.id}/> ))
    }
  </div>;
};

export default Posts;
