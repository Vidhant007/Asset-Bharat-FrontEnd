import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Message = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/interested', formData);
      console.log('Form submitted successfully:', response.data);
      toast.success('Response submitted');

       // Reset the form data
       setFormData({
        name: '',
        lastName: '',
        email: '',
        message: ''
      });
  

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting response');

       // Reset the form data
       setFormData({
        name: '',
        lastName: '',
        email: '',
        message: ''
      });
    }
  };
  

  return (
    <div>
      <ToastContainer position='top-right'/>
    <div className='bg-blue-xlight text-black md:flex items-center justify-evenly p-20'>
      <div className="md:inline-block mb-4 md:mb-0">
        <section className='text-custom-blue flex flex-col gap-12'>
          <h1 className="text-6xl leading-7 sm:text-6xl sm:tracking-tight">
            SEND US A <br /> MESSAGE
          </h1>
          <p className='text-sm font-jost'>
            If you're interested in hearing more about the <br /> way we work, have a business proposal, or are <br /> interested in making a purchase, we'd love to <br /> hear from you.
          </p>
          <div className="h-4 w-1/4 bg-custom-blue"></div>
        </section>
      </div>

      <div className="md:inline-block">
        <form className='flex flex-col gap-5 font-jost' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor='name' className="block text-black">Name*</label>
            <input type="text" placeholder='Your name' className="block bg-white w-96 p-2" value={formData.name} onChange={handleChange} name="name" />
          </div>

          <div className="mb-3">
            <label htmlFor='lastName' className="block text-black">Last name</label>
            <input type="text" placeholder='Your last name' className="bg-white block w-96 p-2" value={formData.lastName} onChange={handleChange} name="lastName" />
          </div>

          <div className="mb-3">
            <label htmlFor='email' className="block text-black">Your email*</label>
            <input type="text" placeholder='Your email address' className="bg-white block w-96 p-2" value={formData.email} onChange={handleChange} name="email" />
          </div>

          <div className="mb-3">
            <label htmlFor='message' className="block text-black">Message*</label>
            <textarea type="text" placeholder='Enter your message' className="bg-white block w-96 p-2" value={formData.message} onChange={handleChange} name="message" />
          </div>

          <div className='flex justify-end font-krona'>
            <button type='submit' className="bg-custom-blue hover:bg-blue-700 text-white p-3 pr-7 pl-7">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>

  )
}

export default Message;
