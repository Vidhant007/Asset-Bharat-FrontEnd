import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FundedCard from './FundedCard';

const FundedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/properties/funded');
        setProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className='bg-cream-bg p-20 pt-22'>

<div className=" justify-center flex   pb-10">
  <h4 className="text-custom-blue text-4xl">Fully Funded Properties.</h4>
</div>


    <div className='flex justify-center '>
      <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
        {properties.map((property) => (
          <FundedCard
            key={property._id}
            id={property._id}
            img={property.highlightedImages[0]} // Assuming the first image is used
            name={property.name}
            propertyInfo="3 BEDROOM HOUSE IN BEAUTIFUL SUBURBS" // Sample property info
            propertyValue="200 cr." // Sample property value
            entryYield="11.01%" // Sample entry yield
            targetIRR="19%" // Sample target IRR
            rentalYield="7%" // Sample rental yield
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FundedProperties;
