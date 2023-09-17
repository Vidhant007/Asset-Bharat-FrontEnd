import React from 'react'

const Tenancy = () => {
  return (
    <div className='bg-custom-blue text-white md:flex items-center justify-evenly p-20'>
    <div className="md:inline-block mb-4 md:mb-0 ">
        <section className='text-white flex flex-col gap-12'>
        <h1 className="text-5xl pl-25 leading-7  sm:text-5xl sm:tracking-tight">
            Tenancy .
      </h1>            
    

        </section>    
    </div>

    <div className="md:inline-block space-y-12">
        <div className='flex gap-7 pb-10'>
           <div>
                <h4 className='text-xl'>LEASE STRUCTURE</h4>

                <div className='flex pt-10 gap-12'>

                    <div className='flex flex-col gap-7'>
                        <div className='bg-yellow-500 h-21 w-21 skew-y-12'></div>
                        <h5 className='text-sm'>Lease Start</h5>
                    </div>

                    <div className='flex flex-col gap-7'>
                        <div className='bg-yellow-500 h-21 w-21 skew-y-12'></div>
                        <h5 className='text-sm'>Lock-in End </h5>
                    </div>

                    <div className='flex flex-col gap-7'>
                        <div className='bg-yellow-500 h-21 w-21 skew-y-12'></div>
                        <h5 className='text-sm'>Lease End Date</h5>
                    </div>

                </div>
            </div>
        </div>

        <div className='flex gap-7'>
            <div>
                <h4 className='text-xl pb-10'>TENANT OVERVIEW </h4>
                <div className='font-jost text-xm flex flex-col gap-8'>
                    <div>
                        <h5>Monthly rent (&#8377;/sq.)</h5>
                        <hr className="border-white border-b-1 w-full" />
                    </div>

                    <div>
                        <h5>Escalation on base rent</h5>
                        <hr className="border-white border-b-1 w-full" />
                    </div>

                    <div>
                        <h5>Monthly Security Deposit</h5>
                        <hr className="border-white border-b-1 w-full" />
                    </div>
                </div>

            </div>

        </div>
    </div>
  </div>  )
}

export default Tenancy