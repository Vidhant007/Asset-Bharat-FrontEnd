import React from 'react';
import placeholder from '../../assets/contact-us-img.avif';
import star_dark from '../../assets/star-dark.svg';

const Contact = () => {
  return (
    <div className="bg-white text-partner flex relative justify-center md:gap-20 pb-25 pt-25">

      <div className="flex p-2 flex-col justify-center md:pt-30 pt-20 space-y-10">


        <img src={placeholder} alt="About Us" className='flex md:hidden' />
        <div className='flex p-2 gap-10'>
          <div>
            <h3>CONTACTS</h3>
            <p className="font-jost">123-456-7890</p>
            <p className="font-jost">email@example.com</p>
          </div>
          <div>
            <h3>ADDRESS</h3>
            <p className="font-jost">123 your street name</p>
            <p className="font-jost">City name, Country, post code</p>
          </div>
        </div>  

        <div className='w-20 h-4 bg-partner-bg  md:mt-20'></div>

      </div>

      <div >
        <img src={placeholder} alt="About Us" className='hidden md:flex' />
        <img src={star_dark} alt="star" style={{ top: '17%', right: '17%', fontSize: '6rem' }} className='md:absolute hidden md:flex ' />
        <h2 className='absolute md:flex md:top-30 md:left-100 left-0 text-3xl md:text-9xl'>
          <span className="text-partner">CONTACT US</span>
        </h2>

      </div>
    </div>
  );
};

export default Contact;
