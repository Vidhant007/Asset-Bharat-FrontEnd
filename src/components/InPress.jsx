import React from 'react';
import inPress from '../assets/inPress.avif';
import star_dark from '../assets/star-dark.svg';

const InPress = () => {
  return (
    <div className="bg-white text-partner flex relative justify-center gap-20 pb-30 pt-20">
      <div className="w-1/4">
        <img src={inPress}  alt="About Us" />
        <img src={star_dark} alt="star" style={{ position: 'absolute', top: '1%', right: '20%', fontSize: '6rem' }} className='hidden md:flex '/>
        <h2 style={{ position: 'absolute', top: '10%', right: '28%', fontSize: '6rem' }} className='hidden md:flex'>
  <span className="text-partner">IN PRESS</span>
</h2>

      </div>
      <div className="flex flex-col justify-center pt-30 space-y-10">
      <div>
            <h3>The New York Times</h3>
          <p className="font-jost">
          "It's not often we have the pleasure to come across such a <br/> customer-obsessed brand that not only is in it for the money, but <br/> more importantly, for the smiles and trust of their customers. As <br/> undercover buyers, we were especially blown away by the sheer <br/> level of focus and attention to detail the whole team demonstrated <br/> every step of the way. "          </p>
        </div>
        <div>
            <h3>Architect Daily</h3>
          <p className="font-jost">
          "Presson has peacefully combined modern architecture, <br/> world-class interior design, and realtor services to create a truly unique,<br/> and customer-facing service concept that's all about the 21st <br/>century."           </p>
        </div>


        <div className='w-20 h-4 bg-partner-bg ml-90'></div>

      </div>
    </div>
  );
};

export default InPress;
