import React from 'react';
import img from '../../assets/partners.avif';
import star from '../../assets/star-dark.svg';

const OurPartners = () => {
  return (
    <div className='bg-cream-bg text-partner flex justify-evenly pt-20 pb-25'>
      <div className='relative'>
        <h1 className='text-8xl absolute top-0 left-0'>OUR <br/>PARTNERS</h1>
        <div className='mt-90'>
          <div className='w-20 h-4 bg-partner-bg mb-20'></div>
          <p className='font-jost'>We work with the best specialists in the <br/> field to ensure the best quality for our projects.</p>
        </div>
      </div>
      <div >
        <img src={img} alt="image" />
        <img src={star} alt="star" className='absolute top-30 right-30'/>
      </div>
    </div>
  );
}

export default OurPartners;
