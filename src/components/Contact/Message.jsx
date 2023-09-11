import React from 'react';

const Message = () => {
  return (
    <div className='bg-blue-xlight text-partner md:flex items-center justify-evenly p-20'>
      <div className="md:inline-block mb-4 md:mb-0">
          <section className=' flex flex-col gap-12'>
          <h1 className="text-5xl leading-7  sm:truncate sm:text-5xl sm:tracking-tight">
          SEND US A <br/>   MESSAGE
        
        </h1>            
        <p className='text-sm font-jost'> If you're interested in hearing more about the <br/> way we work, have a business proposal, or are <br/> interested in making a purchase, we'd love to <br/> hear from you.</p>

        <div class="h-4 w-1/4 bg-custom-blue"></div>

          </section>    
      </div>

      <div className="md:inline-block">
        <form className='flex flex-col gap-5 font-jost'>
          <div className="mb-3">
            <label htmlFor='name' className="block text-black">Name*</label>
            <input type="text" placeholder='Your name' className="block w-96  p-2 " />
          </div>

          <div className="mb-3">
            <label htmlFor='name' className="block text-black">Last name</label>
            <input type="text" placeholder='Your last name' className="block w-96 p-2 " />
          </div>

          <div className="mb-3">
            <label htmlFor='name' className="block text-black">Your email*</label>
            <input type="text" placeholder='Your email address' className="block w-96  p-2 " />
          </div>

          <div className="mb-3">
            <label htmlFor='name' className="block text-black">Message*</label>
            <textarea type="text" placeholder='Enter your message' className="block w-96  p-2 " />
          </div>
          
          <div className='flex justify-end font-krona'>
          <button class="bg-partner-bg hover:bg-blue-700 text-white  p-3 pr-7 pl-7">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Message;
