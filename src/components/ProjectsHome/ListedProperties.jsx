import React, { useEffect, useState } from 'react';
import garcia from '../../assets/garcia_dark.svg';
import axios from 'axios';

const ListedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/properties/listed');
        setProperties(response.data.properties);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map((property, index) => (
        <div
          key={property.id}
          className={`${
            index === 1 ? 'bg-blue-xlight' : 'bg-cream-bg'
          } text-custom-blue md:flex items-center justify-evenly p-12`}
        >
          <div className="md:inline-block">
            {property.highlightedImages.length > 0 && (
              <img
                src={property.highlightedImages[0]}
                crossOrigin="none"
                alt={`Image 0`}
              />
            )}
          </div>

          <div className="md:inline-block mb-4 md:mb-0">
            <section className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl">{property.name}</h2>
                <h5 className="text-sm font-jost text-partner">
                  3 BEDROOM HOUSE IN BEAUTIFUL SUBURBS
                </h5>
              </div>
              <p className="text-sm font-jost text-partner">
                Garcia has provided custom-made furniture to all <br /> of our
                Presson properties. Mixing modern styles <br />
                with natural shapes and materials, Garcia <br />
                products have a true air of elegance and <br />
                timelessness.
              </p>
              <div>
                <h3>PROPERTY VALUE - 200 cr.</h3>
                <h3>ENTRY YIELD - 11.01%</h3>
                <h3>TARGET IRR - 19%</h3>
                <h3>RENTAL YIELD - 7%</h3>
              </div>

              <button className="bg-custom-blue text-sm text-white w-1/2 h-10">
                INVEST
              </button>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListedProperties;
