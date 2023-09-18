import React from 'react'
import Blogimage from '../assets/blog.avif';


const BlogContent = () => {
  return (
    <div className='bg-cream-bg text-partner flex flex-col items-center p-5 pt-22'>
        <h1 className='text-4xl'>Your Blog Post</h1>
        <h5 className='font-jost'>Blog post Description</h5>
        <h6 className='font-jost'>17/08/2023 . 1 min read</h6> 
        <img src={Blogimage} className='w-2/4'/>
        <p className='font-jost'>Blog content</p>
    </div>
  )
}

export default BlogContent