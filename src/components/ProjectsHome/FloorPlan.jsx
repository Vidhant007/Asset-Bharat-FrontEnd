import React, { useEffect } from 'react';
import plot from '../../assets/plot.jpg';

const FloorPlan = () => {

  return (
    <div className='bg-partner-bg text-white pb-10'>
        <div className=' md:flex items-center justify-evenly p-10'>
            <div className="md:inline-block mb-4 md:mb-0 ">
                <section className=' flex flex-col gap-12'>
                <h1 className="text-5xl pl-25 leading-7  sm:text-5xl sm:tracking-tight">
                    FLOOR PLAN .
            </h1>            
            

                </section>    
            </div>

            <div className="md:inline-block ">
                <div className='flex gap-7 pb-10'>
                <div>
                        
                        <p className=' font-jost'>This is an opportunity to invest in a Growth Asset in Hinjewadi, Phase II of Pune, worth ₹ <br/> 45.5 Cr. This asset spans over ~5.14 acres with a construction possibility of 2.24 lakh sqft. </p>
                    </div>
                </div>

                <div className='flex '>
                    <div>
                        <h4 className='text-xl '>Total Opportunity Space</h4>
                        <h5 className='textx-sm pb-10'>24,20,000 sq.feet </h5>
                        
                        <img src={plot} alt="plotplan" />

                    </div>

                </div>
            </div>
        </div>

         
    </div>
      )
}

export default FloorPlan