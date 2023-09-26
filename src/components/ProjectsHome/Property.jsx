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
    <div className="flex flex-col bg-cream-bg text-custom-blue p-4 md:p-10 pt-10 md:pt-20 pb-10 md:pb-20 items-center">
      {data ? (
        <div className='flex justify-center items-center gap-5'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-left pb-5 pt-20 md:pb-10">{data.name}</h1>
          <img src={star} alt="star" className='md:absolute hidden top-0 right-0' />
        </div>
      ) : (
        <p>Loading property data...</p>
      )}
      {data && data.highlightedImages.length > 0 && (
        <div className="relative w-full md:w-1/2 h-96 mb-6 md:mb-0">
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl md:text-4xl text-white px-2 py-1" onClick={prevImage}>&#10094;</button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl md:text-4xl text-white px-2 py-1" onClick={nextImage}>&#10095;</button>
          <div className="flex h-full">
            {data.highlightedImages.map((image, index) => (
              <img
                crossOrigin="none"
                key={index}
                src={image}
                alt={`Image ${index}`}
                className={`object-cover ${index === currentImageIndex ? 'block' : 'hidden'}`}
                style={{ width: '100%', height: '100%' }}
              />
            ))}
          </div>
        </div>
      )}
      <div className='md:pl-10 w-full md:w-1/2'>
        <h2 className='text-xl md:text-2xl text-left'>INVESTMENT OVERVIEW</h2>
        {data ? <p className='font-jost text-sm'>{data.info3}</p> : null}
      </div>
      <div className='flex flex-col gap-6 pt-6 md:flex-row md:gap-10 md:truncate'>
        <div className='w-full md:w-2/3'>
          <h2 className='text-xl md:text-2xl text-left pb-3 md:pb-5'>INVESTMENT RETURN</h2>
          <div className='flex flex-col gap-2'>
            <h4 className='text-left'>Minimum Investment Size: Rs 7000</h4>
            <h4 className='text-left'>Gross Entry Yield: 11%</h4>
            <h4 className='text-left'>Target IRR: 20%</h4>
            <div>
              <h4 className='text-left'>Rental Yield per Annum: 7%</h4>
              <h5 className='font-jost text-left text-xs'>Note: AB maintenance charges will be excluded from rental profit</h5>
            </div>
            <h4 className='text-left'>Rent from Existing Tenant: Rs 51 per sq feet</h4>
            <button className='bg-custom-blue text-white w-full md:w-1/2 h-10 hover:bg-blue-500 active:bg-blue-700'>INVEST</button>
            <button className='bg-custom-blue text-white w-full md:w-1/2 h-10 hover:bg-blue-500 active:bg-blue-700 mt-2'>JOIN WAITLIST</button>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl text-left pb-3 md:pb-5'>DETAILS</h2>
          <div className='flex flex-col gap-2'>
            <h4 className='text-left'>Cost of Property: 200,000,000</h4>
            <div className='text-left'>
              <h4 className='mb-2'>Funded: 12,203,000</h4>
              <div className='w-3/4 h-2 bg-custom-blue mx-auto'>
                <div className='w-3/4 h-full bg-orange-500'></div>
              </div>
            </div>
            <h4 className='text-left'>Size: 1,500,000 sq. feet</h4>
            <h4 className='text-left'>Floors: 3</h4>
            <h4 className='text-left'>Parking Spaces: 2</h4>
            <h4 className='text-left'>Year Built: 2020</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
