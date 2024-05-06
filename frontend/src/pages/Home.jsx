import React from 'react'
import Stories from '../components/Stories';
import Posts from '../components/Posts';
import Share from '../components/Share';

const Home = () => {
  return (
    <div className='bg-gray-100 flex6 py-5 px-16'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home;
