import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import star from '../../assets/star-dark.svg';
import Tenancy from './Tenancy';
import image from '../../assets/sale_prop.jpg';

const PropertyStatic = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showSummary, setShowSummary] = useState(false); // State to control summary display

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/properties/getproperty?id=${id}`);
        setData(response.data.property);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching property:', error);
        setIsLoading(false);
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

  const toggleSummary = () => {
    setShowSummary(!showSummary);
  };

  return (
    <div className="flex flex-col bg-cream-bg text-custom-blue p-4 md:p-10 pt-10 md:pt-20 pb-10 md:pb-20 items-center">
        <div className='flex justify-center items-center gap-5'>
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-left pb-5 pt-20 md:pb-10">Test Property</h1>
          <img src={star} alt="star" className='md:absolute hidden top-0 right-0' />
        </div>
      
        <div className="relative w-full md:w-1/2 h-96 mb-6 md:mb-0 rounded-lg overflow-hidden shadow-lg border-2 border-blue-900">
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl md:text-4xl text-white px-2 py-1" onClick={prevImage}>&#10094;</button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl md:text-4xl text-white px-2 py-1" onClick={nextImage}>&#10095;</button>
          <div className="flex h-full">
              <img
                crossOrigin="none"
                src={image}
                style={{ width: '100%', height: '100%' }}
              />
          </div>
        </div>
       <div className='md:px-10 p-2 w-full md:w-1/2'>
          <h2 className='text-xl md:text-2xl text-left'>INVESTMENT OVERVIEW</h2>
          <p className='font-jost text-sm'>Looking for the true dream-come-true family home? Pleasantview Gem boasts 5 on-suite bedrooms, a garden and two separate living areas, making it easy for even a big family to relax and unwind after a busy week. Closely situated to the local Pleasantview College, this neighborhood is popular among families. Complete with two decked patio areas and spacious open living areas, this 5 bedroom property comes with air conditioning, private garden, underground parking and fully customized interior design and furnishing. With a vast array of various materials and solutions to choose from, Pleasantview Gem is all about creating a home for you and your loved ones.</p>
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
              {/* Add bot-like icon */}
              <div className="flex cursor-pointer text-blue-800 hover:text-blue-500 py-3" onClick={toggleSummary}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8H21M21 12H17M21 16H21M7 12L3 12M12 4L12 8" />
                </svg>
                <span>Summarise above details</span>
              </div>
                <div className="bg-white border border-blue-900 rounded-lg shadow p-4 md:w-full items-center">
                  <h3 className="text-lg font-bold mb-2">Property Summary </h3>
                  {/* Add a summary of property details here */}
                  <p>{/* Add the summary generated by AI here */}</p>
                  {/* Add a small text */}
                  <p className="text-xs text-gray-500">Generated using Generative AI</p>
                </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-xl md:text-2xl text-left pb-3 md:pb-5'>DETAILS</h2>
            <div className='flex flex-col gap-2'>
              <h4 className='text-left'>Cost of Property: </h4>
              <div className='text-left'>
                <h4 className='mb-2'>Funded: </h4>
                <div className='w-3/4 h-2 bg-custom-blue mx-auto'>
                  <div className='w-3/4 h-full bg-orange-500'></div>
                </div>
              </div>
              <h4 className='text-left'>Size:  sq. feet</h4>
              <h4 className='text-left'>Floors: </h4>
              <h4 className='text-left'>Parking Spaces:</h4>
              <h4 className='text-left'>Year Built:</h4>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PropertyStatic;
