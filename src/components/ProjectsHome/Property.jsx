import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import star from '../../assets/star-dark.svg';
import Tenancy from './Tenancy';

const Property = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/properties/getproperty?id=${id}`);
        setData(response.data.property);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };

    fetchProperty();
  }, [id]);

  useEffect(() => {
    if (data && data.highlightedImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.highlightedImages.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [data]);

  const prevImage = () => {
    if (data && data.highlightedImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.highlightedImages.length) % data.highlightedImages.length);
    }
  };

  const nextImage = () => {
    if (data && data.highlightedImages.length > 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.highlightedImages.length);
    }
  };

  return (
    <div className="flex bg-cream-bg text-custom-blue p-20  flex-col items-center">
      {data ? (
        <div className='flex justify-start items-center gap-12'>
          <h1 className="text-4xl pb-10 pr-30">{data.name}</h1>
          <img src={star} alt="star" className='absolute right-100 top-22' />
        </div>
      ) : (
        <p>Loading property data...</p>
      )}
      {data && data.highlightedImages.length > 0 && (
        <div className="relative w-1/2 h-96 ">
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-white px-2 py-1" onClick={prevImage}>&#10094;</button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-white px-2 py-1" onClick={nextImage}>&#10095;</button>
          <div className="flex h-full">
            {data.highlightedImages.map((image, index) => (
              <img
                crossOrigin="none"
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`object-cover ${index === currentImageIndex ? 'block' : 'hidden'}`}
                style={{ width: '200%', height: '120%' }}
              />
            ))}
          </div>
        </div>
      )}
     <div className='pt-21 pl-105'>
      <h2 className='text-2xl'>INVESTMENT OVERVIEW</h2>
      {data ? <p className='font-jost text-sm w-3/5'>{data.info3}</p> : null}
    </div>

    <div className='flex gap-10 pt-5'>
      <div>
        <h2 className='text-2xl pb-5'>INVESTMENT RETURN</h2>

        <div className='flex flex-col gap-4'>
              <h4>Minimum Investment Size : Rs 7000</h4>

              <h4>Gross Entry Yeild : 11%</h4>
              
              <h4>Target IRR : 20%</h4>
              
              <div>
                <h4>Rental Yield per Annum : 7%</h4>
                <h5 className='font-jost text-sm'>Note : AB maintainance charges will be excluded from rental profit</h5>
              </div>

              <h4>Rent from Existing Tenant : Rs 51 per sq feet</h4>

              <button className='bg-custom-blue text-white w-1/2 h-10 hover:bg-blue-500 active:bg-blue-700'>INVEST</button>

              <button className='bg-custom-blue text-white w-1/2 h-10 hover:bg-blue-500 active:bg-blue-700'>JOIN WAITLIST</button>


        </div>

      </div>

      <div>
        <div>
          <h2 className='text-2xl pb-5'>DETAILS</h2>

        </div>

        <div className='flex flex-col gap-4'>
           <h4>Cost of Property : 200000000</h4>

           <div>
              <h4>Funded : 12203000</h4>
              <div className='w-85 h-4 bg-custom-blue'>
                <div className='w-3/4 h-full bg-orange-500'></div>
               </div>  
           </div>

           <h4>Size : 1500000000 sq.feet</h4>
           <h4>Floors : 3</h4>
           <h4>Parking Spaces : 2</h4>
           <h4>Year Built : 2020</h4>
        </div>

      </div>
    </div> 

    </div>
  );
};

export default Property;
