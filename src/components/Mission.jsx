import React from 'react'
import star from '../assets/star.svg';

const Mission = () => {
  return (
    <div className='bg-partner-bg text-white md:flex items-center justify-evenly p-10 md:p-20 pb-25'>
      <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>
          <h1 className="text-3xl leading-7  sm:truncate sm:text-5xl sm:tracking-tight">
            OUR MISSION
          </h1>
          <div className='flex gap-2 md:w-100'>
            <img src={star} alt="star" />
            <p className='text-sm font-jost'> We're on a mission to change the way the housing market  works. Rather than offering one service or another, we  want to combine as many and make our clients' lives easy  and carefree. Our goal is to match our clients with the  perfect properties that fit their tastes, needs, and budgets. </p>
          </div>
        </section>
      </div>

      <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>
          <h1 className="text-3xl leading-7  sm:truncate sm:text-5xl sm:tracking-tight">
            OUR VISION
          </h1>
          <div className='flex gap-2 md:w-100'>
            <img src={star} alt="star" />
            <p className='text-sm font-jost'> We want to live in a world where people can buy  homes that match their needs, rather than having to find a compromise and settle on the second-best  option. That's why we take a lot of time and care in  getting to know our clients from the moment they  reach out to us and ask for our help.  </p>
          </div>

        </section>
      </div>
    </div>)
}

export default Mission