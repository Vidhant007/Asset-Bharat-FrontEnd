import React from 'react';
import inPress from '../assets/inPress.avif';
import star_dark from '../assets/star-dark.svg';

const InPress = () => {
  return (
    <div className='bg-white text-partner flex md:flex-row flex-col justify-evenly pt-25 pb-25'>
      <div className="w-1/4">
        <img src={inPress} alt="About Us" className='md:flex hidden' />
        <img src={star_dark} alt="star" style={{ position: 'absolute', top: '13%', right: '20%', fontSize: '6rem' }} className='hidden md:flex ' />
        <h2 style={{ top: '20%', right: '28%' }} className='absolute hidden md:flex text-3xl md:text-9xl'>
          <span className="text-partner">IN PRESS</span>
        </h2>
        <h2 className='absolute flex p-2  md:hidden text-3xl md:text-9xl'>
          <span className="text-partner">IN PRESS</span>
        </h2>

      </div>
      <img src={inPress} alt="About Us" className='md:hidden mt-20 p-3' />
      <div className="flex flex-col justify-center md:pt-30 pt-20 p-3 space-y-6 md:space-y-10">
        <div>
          <h3>The New York Times</h3>
          <p className="font-jost w-80 p-2">
            "It's not often we have the pleasure to come across such a customer-obsessed brand that not only is in it for the money, but more importantly, for the smiles and trust of their customers. As undercover buyers, we were especially blown away by the sheer level of focus and attention to detail the whole team demonstrated every step of the way. " </p>
        </div>
        <div>
          <h3>Architect Daily</h3>
          <p className="font-jost w-80 p-2">
            "Presson has peacefully combined modern architecture, world-class interior design, and realtor services to create a truly unique, and customer-facing service concept that's all about the 21st century." </p>
        </div>


        <div className='w-20 h-4 bg-partner-bg md:ml-90'></div>

      </div>
    </div>
  );
};

export default InPress;
