import React from 'react'

const ProcessOfInvesting = () => {
  return (
    <div className='bg-blue-xlight text-custom-blue md:flex items-center justify-evenly p-20'>
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='text-custom-blue flex flex-col gap-12'>
        <h1 className="text-5xl  leading-7  sm:truncate sm:text-5xl sm:tracking-tight">
        PROCESS <br/> OF INVESTING
      </h1>            
      <p className='text-sm font-jost'> To bring our vision into reality, we need the best partners out there.<br/> We've joined hands with one of the best when it comes to materials,<br/> lightning and furniture to achieve sophisticated results. </p>
    
      <div class="h-4 w-1/4 bg-custom-blue"></div>

        </section>    
    </div>

    <div className="md:inline-block space-y-12">
        <div className='flex gap-7'>
            <h1 className='text-8xl'>1</h1>
            <div>
                <h4>PICK YOUR PROPERTY</h4>
                <p className='text-sm font-jost'>Pick a suitable commercial or residential property based on your <br/>interest and investment size. Make the investment and enjoy your <br/> returns.</p>
            </div>
        </div>

        <div className='flex gap-7'>
        <h1 className='text-8xl'>2</h1>
            <div>
                <h4>EARN</h4>
                <p className='text-sm font-jost'>Receive monthly rents in your account based on the porportion of <br/> your investment and selected portfolio. Track your investments and <br/> invest in multiple properties to strengthen your second salary.</p>
            </div>

        </div>

        <div className='flex gap-7'>
        <h1 className='text-8xl'>3</h1>
             <div>
                <h4>SELL</h4>
                <p className='text-sm font-jost'>Track your investments or our update to liquidate your assets at the <br/> correct time. You can resale your units on your website as well as to <br/> a third party.</p>
             </div>
        </div>
    </div>
  </div>  )
}

export default ProcessOfInvesting