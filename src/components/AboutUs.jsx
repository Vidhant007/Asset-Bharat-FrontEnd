import React from 'react';
import aboutus_img from '../assets/about-us-placeholder.avif';
import star_dark from '../assets/star-dark.svg';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row relative bg-custom-blue justify-center gap-20 pb-30 md:pt-25 p-2">
      <div className="md:w-1/4">
        <img src={aboutus_img} alt="About Us" className='hidden md:flex' />
        <img src={star_dark} alt="star" style={{ position: 'absolute', top: '14%', right: '71.75%', fontSize: '6rem' }} className='hidden md:flex ' />
        <h2 className=' md:top-30 md:left-1/3 pl-2 top-28 left-1 text-white absolute md:flex text-3xl md:text-9xl'>
          <span className="text-partner text-white">ABOUT US </span>
        </h2>
      </div>
      
      <div className="flex flex-col w-72 md:w-96 justify-center pt-30 pb-3 md:space-y-10 p-3">
        <div>
          <p className="font-jost">
            Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers to make do with the new z space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and be there with them from the get-go.
          </p>
        </div>

        <div>
          <p className="font-jost">
            Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won't take 'OK' as an answer.
          </p>
        </div>


        <div className='w-20 h-4 bg-partner-bg md:ml-90'></div>
      </div>
        <img src={aboutus_img} alt="About Us" className='flex md:hidden p-3' />
    </div>
  );
};

export default AboutUs;
