import React from 'react';
import Blogimage from '../assets/blog.avif';

const Blogs = () => {
  return (
    <div className='bg-white text-black flex justify-center items-center h-screen'>
      <div>
        <h1>Blog</h1>

        <div className='grid grid-cols-2 grid-rows-2 gap-5'>
          <div className='bg-gray-100 rounded-lg p-4 text-center'>
            <img src={Blogimage} alt='Blog' className='w-2/3 mx-auto' />
            <p>Content for Card 1</p>
          </div>
          <div className='bg-gray-100 rounded-lg p-4 text-right'>
            <img src={Blogimage} alt='Blog' className='w-2/3 mx-auto' />
            <p>Content for Card 2</p>
          </div>
          <div className='bg-gray-100 rounded-lg p-4 text-right'>
            <img src={Blogimage} alt='Blog' className='w-2/3 mx-auto' />
            <p>Content for Card 3</p>
          </div>
          <div className='bg-gray-100 rounded-lg p-4 text-right'>
            <img src={Blogimage} alt='Blog' className='w-2/3 mx-auto' />
            <p>Content for Card 4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
