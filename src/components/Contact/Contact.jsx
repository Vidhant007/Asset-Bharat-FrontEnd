import React from 'react';
import placeholder from '../../assets/contact-us-img.avif';
import star_dark from '../../assets/star-dark.svg';

const Contact = () => {
  return (
    <div className="bg-white text-partner flex relative justify-center gap-20 pb-25 pt-20">
     
      <div className="flex flex-col justify-center pt-30 space-y-10">

        <div className='w-20 h-4 bg-partner-bg  mt-20'></div>

        <div className='flex gap-10'>
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

      

      </div>

      <div >
        <img src={placeholder}  alt="About Us" />
        <img src={star_dark} alt="star" style={{ position: 'absolute', top: '17%', right: '17%', fontSize: '6rem' }} className='hidden md:flex '/>
        <h2 style={{ position: 'absolute', top: '15%', right: '28%', fontSize: '6.8rem' }} className='hidden md:flex'>
  <span className="text-partner">CONTACT US</span>
</h2>

      </div>
    </div>
  );
};

export default Contact;
