import React from 'react';
import img2 from '../../assets/projects_placeholder2.avif';
import img from '../../assets/projects_placeholder.avif';

import star from '../../assets/star-dark.svg';

const ProjectsHome = () => {
  return (
    <div className='bg-blue-xlight text-partner flex justify-center pt-25 pb-20'>
      <div className='md:w-1/2'>
        <div className='absolute'>

          <h1 className='text-custom-blue text-5xl md:text-8xl '>OUR <br /> PROJECTS</h1>
        </div>

        <div className='md:mt-40 mt-28 p-2'>
          <div className='w-20 h-4 bg-partner-bg mb-20'></div>
<<<<<<< Updated upstream
            <button className='bg-custom-blue text-white w-full h-12'>LIST ALL PROPERTIES</button>
            <div className='pt-5'>
                <p className='font-jost text-sm'>Asset Bharat is a synonym for the highest quality, laser-sharp focus, and <br /> deliverability. We want your money to reach its potential and you to have a <br /> stable second source of income from a market that was previously offered to <br /> a very niche group.</p>
            </div>
=======
          <Link to='/allproperties' className="font-krona bg-custom-blue text-sm text-white w-3/4 h-10 flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-blue-500 active:bg-blue-700">LIST ALL PROPERTIES</Link>

          <div className='pt-5'>
            <p className='font-jost text-sm'>Asset Bharat is a synonym for the highest quality, laser-sharp focus, and deliverability. We want your money to reach its potential and you to have a stable second source of income from a market that was previously offered to a very niche group.</p>
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
      <div >
        <img src={img} alt="image" />
        <img src={star} alt="star" className='absolute hidden md:flex top-22 right-30' />

      </div>
    </div>
  );
}

export default ProjectsHome;
