import React from 'react';
import map from '../../assets/map.jpg';

const Location = () => {
  return (
    <div className='bg-blue-xlight text-partner pb-10'>
      <div className='md:flex items-center justify-evenly p-4 md:p-10'>
        <div className="md:inline-block mb-4 md:mb-0">
          <section className='text-partner flex flex-col gap-4 md:gap-12'>
            <h1 className="text-xl md:text-5xl text-center leading-7 sm:text-5xl sm:tracking-tight">
              LOCATION
            </h1>
          </section>
        </div>

        <div className="md:inline-block md:w-1/3 pr-10 ">
          <div className='flex flex-col md:flex-row gap-4 md:gap-7 pb-4 md:pb-10'>
            <div>
              <p className='text-sm font-jost'>
                The asset is located in Phase II of Hinjewadi, a major technology & manufacturing hub in Pune. The upcoming metro line (expected in 2026) and the Mumbai-Bengaluru Expressway (expected in 2028) have led to increased commercial interest in the area. The asset is among the very few parcels of land in the area available for development.
              </p>
            </div>
          </div>

          <div className='flex'>
            <div>
              <h4 className='text-xl md:text-2xl pb-4 md:pb-10'>LOCATION OVERVIEW</h4>
              <div className='font-jost text-sm md:text-base flex flex-col gap-4 md:gap-8'>
                <div className='flex flex-col gap-3 md:gap-5'>
                  <h6 className='text-sm font-krona bg-blue-500 text-center'>Airport</h6>
                  <div>
                    <h5>Pune International Airport: 24 Km</h5>
                    <hr className="border-black border-b-1 w-full" />
                  </div>
                </div>

                <div className='flex flex-col gap-3 md:gap-5'>
                  <h6 className='text-sm font-krona bg-blue-500 text-center'>Railway Station</h6>
                  <div>
                    <h5>Todak Station: 10 Km</h5>
                    <hr className="border-black border-b-1 w-full" />
                  </div>
                </div>

                <div className='flex flex-col gap-3 md:gap-5'>
                  <h6 className='text-sm font-krona bg-blue-500 text-center'>Highway</h6>
                  <div>
                    <h5>NH-10: 0.1 Km</h5>
                    <hr className="border-black border-b-1 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <img src={map} alt="map-placeholder" />
      </div>
    </div>
  );
}

export default Location;
