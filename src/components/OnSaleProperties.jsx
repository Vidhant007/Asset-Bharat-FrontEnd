import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FundedCard from './FundedCard';

const OnSaleProperties = () => {
  const [properties, setProperties] = useState([]);
  const [locationFilter, setLocationFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

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

  // Function to handle location filter change
  const handleLocationFilterChange = (location) => {
    setLocationFilter(location);
  };

  // Function to handle price filter change
  const handlePriceFilterChange = (price) => {
    setPriceFilter(price);
  };

  // Filter properties based on selected location and price filters
  const filteredProperties = properties.filter((property) => {
    const locationMatch = locationFilter === 'All' || property.location === locationFilter;
    const priceMatch = priceFilter === 'All' || property.priceCategory === priceFilter;
    return locationMatch && priceMatch;
  });

  // Get unique locations and price categories for toggles
  const uniqueLocations = [...new Set(properties.map((property) => property.location))];
  const uniquePriceCategories = [...new Set(properties.map((property) => property.priceCategory))];

  return (
    <div className='bg-cream-bg p-20 pt-22'>
      <div className="justify-center flex pb-10">
        <h4 className="text-custom-blue text-4xl">On Sale Properties.</h4>
      </div>
      <div className="flex justify-center">
        {/* Location Filter Toggle */}
        <div className="mr-8">
          <label htmlFor="locationFilter" className="text-blue-900">Location Filter:</label>
          <select
            id="locationFilter"
            value={locationFilter}
            onChange={(e) => handleLocationFilterChange(e.target.value)}
            className="ml-2 border rounded-lg px-2 py-1 bg-white text-blue-900"
          >
            <option value="All">All Locations</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        {/* Price Filter Toggle */}
        <div>
          <label htmlFor="priceFilter" className="text-blue-900">Price Filter:</label>
          <select
            id="priceFilter"
            value={priceFilter}
            onChange={(e) => handlePriceFilterChange(e.target.value)}
            className="ml-2 border rounded-lg px-2 py-1 bg-white text-blue-900"
          >
            <option value="All">All Prices</option>
            {uniquePriceCategories.map((priceCategory) => (
              <option key={priceCategory} value={priceCategory}>
                {priceCategory}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {filteredProperties.map((property) => (
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

export default OnSaleProperties;
