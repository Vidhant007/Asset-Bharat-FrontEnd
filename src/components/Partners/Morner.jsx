import React from 'react'
import morner_img from '../../assets/morner_img.avif';
import morner from '../../assets/morner.svg';


const Morner = () => {
  return (
    <div className='bg-partner-bg text-white md:flex items-center justify-evenly pt-24 pb-24 p-20'>
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>

        <img src={morner}/>
               
      <p className='text-sm font-jost'> Morner specializes in stairwell solutions in both <br/> industrial and residential spaces. Together with <br/> Presson, they create bespoke stairs for both <br/> outdoors and inside our properties</p>
      <p className='text-sm font-jost'> Being and environmentally-conscious business, <br/> all Morner stairs are made from high-quality <br/>recycled materials where possible, doing their <br/>part in lowering the CO2 emissions of all <br/> Presson residences.  </p>

    
      <div class="h-4 w-1/4 bg-white"></div>

        </section>    
    </div>

    <div className="md:inline-block">
       <img src={morner_img}/>
    </div>
  </div>

  )
}

export default Morner;