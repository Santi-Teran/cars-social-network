import React from 'react'
import Stories from '../components/Stories';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className='bg-gray-100 flex6 py-5 px-16'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home;
