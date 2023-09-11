import React from 'react'
import westburr_img from '../../assets/westburr_img.avif';
import westburr from '../../assets/westburr.svg';


const WestBurr = () => {
  return (
    <div className='bg-partner-bg text-white md:flex items-center justify-evenly pt-24 pb-24 p-20'>
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>

        <img src={westburr}/>
               
      <p className='text-sm font-jost'> Westburr custom lighting solutions help to bring <br/> your space alive. From mood lighting to high- <br/>scale industrial solutions, Westburr is known for <br/>their timeless design and quality. </p>
      <p className='text-sm font-jost'> Depending on the residence, Westburr offers <br/> various lighting solutions based around the <br/> needs of the customer, and offers highly tailored <br/> packages for all Presson clients. </p>

    
      <div class="h-4 w-1/4 bg-white"></div>

        </section>    
    </div>

    <div className="md:inline-block">
       <img src={westburr_img}/>
    </div>
  </div>

  )
}

export default WestBurr