import React from 'react';
import Blogimage from '../assets/blog.avif';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className='bg-cream-bg text-partner flex flex-col gap-10 items-center'>
      <h1 className='text-8xl pt-5'>BLOGS</h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className='text-center pb-5'>
            <Link to='/blog'><img src={Blogimage} alt="Blogimage" className="w-3/4 mx-auto" /></Link>
            <h4 className='text-2xl'>Your Blog Post</h4>
            <h6 className='text-xm font-jost'>Blog Post Description</h6>
            <p className='text-sm font-jost'>17/08/2023 . 1 min Read</p>
          </div>

          <div className='text-center pb-5'>
          <Link to='/blog'><img src={Blogimage} alt="Blogimage" className="w-3/4 mx-auto" /></Link>
            <h4 className='text-2xl'>Your Blog Post</h4>
            <h6 className='text-xm font-jost'>Blog Post Description</h6>
            <p className='text-sm font-jost'>17/08/2023 . 1 min Read</p>
          </div>

          <div className='text-center pb-5'>
          <Link to='/blog'><img src={Blogimage} alt="Blogimage" className="w-3/4 mx-auto" /></Link>
            <h4 className='text-2xl'>Your Blog Post</h4>
            <h6 className='text-xm font-jost'>Blog Post Description</h6>
            <p className='text-sm font-jost'>17/08/2023 . 1 min Read</p>
          </div>

          <div className='text-center pb-5'>
          <Link to='/blog'><img src={Blogimage} alt="Blogimage" className="w-3/4 mx-auto" /></Link>
            <h4 className='text-2xl'>Your Blog Post</h4>
            <h6 className='text-xm font-jost'>Blog Post Description</h6>
            <p className='text-sm font-jost'>17/08/2023 . 1 min Read</p>
          </div>
    </div>

    </div>
  )
}

export default Blogs;
