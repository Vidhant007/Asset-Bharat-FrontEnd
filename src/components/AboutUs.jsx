import React from 'react';
import aboutus_img from '../assets/about-us-placeholder.avif';
import star_dark from '../assets/star-dark.svg';

const AboutUs = () => {
  return (
    <div className="flex relative justify-center gap-20 pb-30 pt-20">
      <div className="w-1/4">
        <img src={aboutus_img}  alt="About Us" />
        <img src={star_dark} alt="star" style={{ position: 'absolute', top: '10%', right: '71.75%', fontSize: '6rem' }} className='hidden md:flex '/>
        <h2 style={{ position: 'absolute', top: '10%', right: '26%', fontSize: '6rem' }} className='hidden md:flex'>
  <span className="text-partner">AB</span>OUT US
</h2>

      </div>
      <div className="flex flex-col justify-center pt-30 space-y-10">
        <div>
          <p className="font-jost">
            Hackney started as a small interior design firm in downtown <br/> Michigan, aiming to help home buyers to make do with the new <br/> space that they had acquired. It soon became obvious that it would <br/> make sense to help our clients see beyond the walls and floor plans, <br/> and be there with them from the get-go.
          </p>
        </div>
        
        <div>
        <p className="font-jost">
          Currently, we offer house realtor, interior design, and architecture <br/>services in order to help our customers find their forever homes as<br/> seamlessly and painlessly as possible. We value our customers <br/> above everything else, meaning that we won't take 'OK' as an <br/> answer.
        </p>
        </div>
      

        <div className='w-20 h-4 bg-partner-bg ml-90'></div>
      </div>
    </div>
  );
};

export default AboutUs;
