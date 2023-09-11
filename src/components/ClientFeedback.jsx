import React from 'react'
import star from '../assets/star.svg'

const ClientFeedback = () => {

  return (
    <div className='bg-custom-blue '>
      <div className='flex justify-center pr-100 pt-8 '>
          <h2 className='text-5xl font-krona'>CLIENT FEEDBACK</h2>
      </div>
    <div className=' text-white md:flex items-center justify-evenly p-20 pb-20'>     
    <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>
            <div className='flex gap-2'>
              <div>
                  <img src={star} alt="star"/>
              </div>
                <div>
                  <h4 className='font-krona'>Miriam Hayes</h4>
                  <p className='text-sm font-jost'> We have bought and sold a handful of <br/> properties in the past with various different <br/>realtors, but none came close to the service we <br/>got at Presson's. Not only is the team full of<br/>  experts who know what they're talking about, but<br/>  they are also always willing to go that extra mile <br/> to ensure customer happiness and satisfaction.<br/>  We were never left hanging and waiting for an <br/> answer – everyone got back to us promptly and <br/> we never felt like we weren't in the loop of what <br/> was going on. The whole process was smooth<br/>  and we never felt rushed or pushed to make a<br/>  decision. Instead, we could take the time to <br/> decide on everything, and ended up signing the<br/>  papers within weeks. </p>
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
                <div>
                  <h4 className='font-krona'>James and Susan Smith</h4>
                  <p className='text-sm font-jost'> We had heard a lot of praise for Presson's team, <br/> since many of our social circle was already using<br/>  their services to purchase their own homes. We <br/>  had pretty high expectations, and were pleasantly <br/>  surprised when they were not just met, but <br/> surpassed by a mile. The team was <br/>  accommodating at all stages – from viewing the <br/>  properties, to providing extra information on <br/>  some of the interior materials, to explaining in <br/> detail all the clauses in the contracts. Even our <br/>  children could join the house viewing process, <br/> something which we were eternally grateful.<br/>  Now, we are happy homeowners in a nice <br/>  neighborhood, and we couldn't be happier. </p>
                </div>
            </div>     

        </section>    
    </div>
  </div> 
  </div>
  );
};




export default ClientFeedback
