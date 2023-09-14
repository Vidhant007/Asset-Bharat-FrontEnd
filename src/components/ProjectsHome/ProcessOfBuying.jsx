import React from 'react'

const ProcessOfBuying = () => {
  return (
    <div className='bg-custom-blue text-white md:flex items-center justify-evenly p-20'>
    <div className="md:inline-block mb-4 md:mb-0 ">
        <section className='text-white flex flex-col gap-12'>
        <h1 className="text-5xl  leading-7  sm:truncate sm:text-5xl sm:tracking-tight">
        PROCESS <br/> OF BUYING
      </h1>            
    
      <div class="h-4 w-1/4 bg-white"></div>

        </section>    
    </div>

    <div className="md:inline-block space-y-12">
        <div className='flex gap-7'>
            <h1 className='text-8xl'>1</h1>
            <div>
                <h4>PROFILE COMPLETION</h4>
                <p className='text-sm font-jost'>Complete your profile and KYC to enable transactions required for <br /> investment. This step is necessary for   the proper and secure <br /> allocation of assets. So that even when you forget your credentials, <br /> your investments/assets will remain secure with you.  </p>
            </div>
        </div>

        <div className='flex gap-7'>
        <h1 className='text-8xl'>2</h1>
            <div>
                <h4>PICK YOUR PROPERTY</h4>
                <p className='text-sm font-jost'>Once you've found the property of your dreams and are ready to <br />invest, you will proceed through our secure transaction backed by <br /> blockchain. Your units will be allocated to you in 2-3 business days <br /> and you will receive the certificate on your registered email.</p>
            </div>

        </div>

        <div className='flex gap-7'>
        <h1 className='text-8xl'>3</h1>
             <div>
                <h4>SIT BACK AND EARN</h4>
                <p className='text-sm font-jost'>We don't play around – that means that our bold and confident <br /> approach to procuring the correct properties will generate <br /> rewarding returns for you. So just relax and trust your judgment of <br /> choosing us.</p>
             </div>
        </div>
    </div>
  </div>  )
}

export default ProcessOfBuying