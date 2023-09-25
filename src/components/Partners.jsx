import React from 'react'
import garcia from '../assets/garcia.svg'
import westburr from '../assets/westburr.svg'
import morner from '../assets/morner.svg'

const Partners = () => {
  return (
    <div className='bg-partner-bg text-white md:flex items-center justify-evenly p-20'>
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>
        <h1 className="text-3xl md:text-6xl  leading-7  sm:truncate sm:text-6xl sm:tracking-tight">
        Partners
      </h1>            
      <p className='text-sm font-jost'> To bring our vision into reality, we need the best partners out there.<br/> We've joined hands with one of the best when it comes to materials,<br/> lightning and furniture to achieve sophisticated results. </p>
    
      <div class="h-4 w-1/4 bg-white"></div>

        </section>    
    </div>

    <div className="md:inline-block">
        <div>
            <img src={westburr}/>
        </div>

        <div>
            <img src={garcia}/>
        </div>

        <div>
            <img src={morner}/>
        </div>
    </div>
  </div>

  )
}

export default Partners