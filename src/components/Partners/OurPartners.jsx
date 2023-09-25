import React from 'react';
import img from '../../assets/partners.avif';
import star from '../../assets/star-dark.svg';

const OurPartners = () => {
  return (
    <div className='bg-cream-bg text-partner flex md:flex-row flex-col justify-evenly pt-25 pb-25'>
      <div className='relative'>
        <h1 className='text-3xl md:text-8xl absolute top-0 left-0'>OUR <br/>PARTNERS</h1>
        <div className='md:mt-90 mt-24 p-1'>
          <div className='w-20 h-4 bg-partner-bg mb-20'></div>
          <p className='font-jost'>We work with the best specialists in the field to ensure the best quality for our projects.</p>
        </div>
      </div>
      <div >
        <img src={img} alt="image" className=' md:flex p-2' />
        <img src={star} alt="star" className='absolute hidden md:flex top-30 right-30'/>
      </div>
    </div>
  );
}

export default OurPartners;
