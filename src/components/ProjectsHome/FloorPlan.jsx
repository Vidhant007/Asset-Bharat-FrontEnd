import React from 'react';
import plot from '../../assets/plot.jpg';

const FloorPlan = () => {
  return (
    <div className='bg-partner-bg text-white pb-10'>
      <div className='md:flex items-center justify-evenly p-4 md:p-10'>
        <div className="md:inline-block mb-4 md:mb-0">
          <section className='text-white flex flex-col gap-4 md:gap-12'>
            <h1 className="text-xl md:text-5xl pl-4 md:pl-25 leading-7 sm:text-5xl sm:tracking-tight text-center md:text-left">
              FLOOR PLAN
            </h1>
          </section>
        </div>

        <div className="md:inline-block md:w-1/2 md:mt-4"> {/* Added margin-top for centering */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-7 pb-4 md:pb-10'>
            <div>
              <p className='font-jost text-sm md:text-base text-center md:text-left'> {/* Centered text and aligned left for larger screens */}
                This is an opportunity to invest in a Growth Asset in Hinjewadi, Phase II of Pune, worth ₹ 45.5 Cr. This asset spans over ~5.14 acres with a construction possibility of 2.24 lakh sqft.
              </p>
            </div>
          </div>

          <div className='flex justify-center md:justify-start'> {/* Centered for small screens and aligned left for larger screens */}
            <div>
              <h4 className='text-xl md:text-2xl pb-4 md:pb-10 text-center md:text-left'>Total Opportunity Space</h4> {/* Centered text and aligned left for larger screens */}
              <h5 className='text-xs md:text-sm pb-10 text-center md:text-left'>24,20,000 sq.feet</h5> {/* Centered text and aligned left for larger screens */}
              <img src={plot} alt="plotplan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlan;
