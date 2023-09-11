import React from 'react'
import member from '../assets/member.avif'

const TeamInfo = () => {
  return ( 
    <div className='bg-cream-bg text-black md:flex items-center justify-evenly p-20'>
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='text-custom-blue flex flex-col gap-12'>
        <h1 className="text-6xl  leading-7  sm:truncate sm:text-6xl sm:tracking-tight">
        MEET OUR <br/>TEAM
      </h1>
      <h3 className='text-base font-jost'>A COLLECTIVE, THAT MAKES DREAMS COME TRUE</h3>            
      <p className='text-sm font-jost'>Our strength lies in our individuality. Set up by <br/>Esther Bryce, Presson's team strives to bring in the <br/>best talent in various fields, from architecture to<br/> interior design and sales. </p>
    
      <div class="h-4 w-1/4 bg-black"></div>

        </section>    
    </div>

    <div className="md: grid grid-rows-2 grid-cols-2 gap-y-12 gap-x-5">
        <div className='space-y-4'>
            <img src={member}/>
            <div>
                <h3>MOHIT SHRIVASTAVA</h3>
                <p className='text-xs font-jost'>HEAD OF PROCUREMENT</p>
            </div>
           
        </div>

        <div className='space-y-4'>
            <img src={member}/>
            <div>
            <h3>SHUBHAM RAJ</h3>
            <p className='text-xs font-jost'>HEAD OF TECHNICAL TEAM AND R&D</p>
            </div> 
        </div>

        <div className='space-y-4'>
            <img src={member}/>
            <div>
            <h3>PRAKHAR SHUKLA</h3>
            <p className='text-xs font-jost'>HEAD OF PORTFOLIO AND RISK ANALYSIS</p>
            </div>
           
        </div>

        <div className='space-y-4'>
            <img src={member}/>
            <div>
            <h3>PRABUDH SANKET</h3>
            <p className='text-xs font-jost'>HEAD OF OPERATIONS</p>
            </div>
        </div>
    </div>
  </div>
      )
    }

export default TeamInfo