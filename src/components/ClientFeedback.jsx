import React from 'react'
import star from '../assets/star.svg'

const ClientFeedback = () => {

  return (
    <div className='bg-custom-blue '>
      <div className='flex justify-center sm:pr-100 pt-8 '>
        <h2 className='text-3xl sm:text-5xl font-krona'>CLIENT FEEDBACK</h2>
      </div>
      <div className=' text-white md:flex items-center justify-evenly p-20 pb-20'>
        <div className="md:inline-block mb-4 md:mb-0">
          <section className='flex flex-col gap-12'>
            <div className='flex gap-2'>
              <div>
                <img src={star} alt="star" />
              </div>
              <div className='w-100 pl-5'>
                <h4 className='font-krona'>Miriam Hayes</h4>
                <p className='text-sm font-jost'> We have bought and sold a handful of properties in the past with various different realtors, but none came close to the service we got at Presson's. Not only is the team full of experts who know what they're talking about, but they are also always willing to go that extra mile to ensure customer happiness and satisfaction. We were never left hanging and waiting for an answer – everyone got back to us promptly and we never felt like we weren't in the loop of what was going on. The whole process was smooth and we never felt rushed or pushed to make a decision. Instead, we could take the time to decide on everything, and ended up signing the papers within weeks. </p>
              </div>
            </div>
          </section>
        </div>

        <div className="md:inline-block mb-4 md:mb-0">
          <section className='flex flex-col gap-12'>
            <div className='flex gap-2'>
              <div>
                <img src={star} alt="star" />
              </div>
              <div className='w-80 pl-5'>
                <h4 className='font-krona'>James and Susan Smith</h4>
                <p className='text-sm font-jost'> We had heard a lot of praise for Presson's team, since many of our social circle was already using their services to purchase their own homes. We had pretty high expectations, and were pleasantly surprised when they were not just met, but surpassed by a mile. The team was accommodating at all stages – from viewing the properties, to providing extra information on some of the interior materials, to explaining in detail all the clauses in the contracts. Even our children could join the house viewing process, something which we were eternally grateful. Now, we are happy homeowners in a nice neighborhood, and we couldn't be happier. </p>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};




export default ClientFeedback
