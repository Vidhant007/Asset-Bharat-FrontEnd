import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/sale_prop.jpg'

const OnSaleCard = ({ id,img, name, propertyInfo, propertyValue, entryYield, targetIRR, rentalYield }) => {
  return (
    <div className="relative max-w-sm rounded-lg bg-custom-blue">
      <img className="rounded-t-lg" src={img1} alt="Image" crossOrigin="none" />
      <div className="absolute top-2 bg-green-700 right-2 bg-blue-700 text-white p-1 rounded-lg">
        On Sale
      </div>
      <div className="p-5 text-white">
        <a href="#">
          <h5 className="mb-2 text-lg text-cyan-400">{name}</h5>
        </a>
        <p className="mb-3 text-sm">{propertyInfo}</p>
        <div className='text-ms font-bold font-jost'>
          <h3>PROPERTY VALUE - {propertyValue}</h3>
          <h3>ENTRY YIELD - {entryYield}</h3>
          <h3>TARGET IRR - {targetIRR}</h3>
          <h3>RENTAL YIELD - {rentalYield}</h3>
        </div>
        <Link to={`/property/1`} className="md:absolute md:right-5 md:bottom-5 inline-flex items-center px-3 py-2 text-sm text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View Details
          <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default OnSaleCard;
