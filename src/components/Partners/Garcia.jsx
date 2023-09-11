import React from 'react'
import garcia from '../../assets/garcia_dark.svg';
import garcia_img from '../../assets/garcia_img.avif';


const Garcia = () => {
  return (
    <div className='bg-cream-bg text-partner md:flex items-center justify-evenly p-20'>
    

    <div className="md:inline-block">
        <img src={garcia_img} alt="" />
    </div>

    <div className="md:inline-block mb-4 md:mb-0">
        <section className='flex flex-col gap-12'>
        <img src={garcia}/>          
      <p className='text-sm font-jost'> Garcia has provided custom-made furniture to all <br/> of our Presson properties. Mixing modern styles <br/>with natural shapes and materials, Garcia <br/>products have a true air of elegance and <br/>timelessness. </p>
      <p className='text-sm font-jost'> Presson clients can expect longevity and top <br/> quality from all Garcia furniture, as they are hand-<br/>made by professionals on-site. </p>

      <div class="h-4 w-1/4 bg-partner-bg"></div>

        </section>    
    </div>
  </div>

  )
}

export default Garcia