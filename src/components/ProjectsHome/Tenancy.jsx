import React from 'react';

const Tenancy = () => {
  return (
    <div className='bg-custom-blue text-white md:flex items-center justify-evenly p-4 md:p-10'>
      <div className="md:inline-block mb-4 md:mb-0">
        <section className='text-white flex flex-col gap-6 md:gap-12'>
          <h1 className="text-2xl md:text-5xl lg:text-5xl pl-4 md:pl-25 leading-7 sm:text-5xl sm:tracking-tight">
            Tenancy
          </h1>
        </section>
      </div>

      <div className="md:inline-block space-y-6 md:space-y-12">
        <div className='flex flex-col gap-4 md:gap-7'>
          <h4 className='text-xl md:text-2xl'>LEASE STRUCTURE</h4>

          <div className='flex flex-col md:flex-row gap-4 md:gap-12 pt-2 md:pt-10'>
            <div className='flex flex-col items-center gap-4 md:gap-7'>
              <div className='bg-yellow-500 h-14 w-14 md:h-21 md:w-21 skew-y-12'></div>
              <h5 className='text-sm'>Lease Start</h5>
            </div>

            <div className='flex flex-col items-center gap-4 md:gap-7'>
              <div className='bg-yellow-500 h-14 w-14 md:h-21 md:w-21 skew-y-12'></div>
              <h5 className='text-sm'>Lock-in End</h5>
            </div>

            <div className='flex flex-col items-center gap-4 md:gap-7'>
              <div className='bg-yellow-500 h-14 w-14 md:h-21 md:w-21 skew-y-12'></div>
              <h5 className='text-sm'>Lease End Date</h5>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-4 md:gap-7'>
          <h4 className='text-xl md:text-2xl'>TENANT OVERVIEW</h4>
          <div className='font-jost text-sm md:text-base flex flex-col gap-4 md:gap-8'>
            <div className='flex flex-col'>
              <h5>Monthly rent (&#8377;/sq.)</h5>
              <hr className="border-white border-b-1 w-full" />
            </div>

            <div className='flex flex-col'>
              <h5>Escalation on base rent</h5>
              <hr className="border-white border-b-1 w-full" />
            </div>

            <div className='flex flex-col'>
              <h5>Monthly Security Deposit</h5>
              <hr className="border-white border-b-1 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tenancy;
