import React, { useState } from 'react';

const Faq = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleToggle = (tab) => {
    setActiveTab((prevTab) => (prevTab === tab ? null : tab));
  };

  return (
    <div className="bg-cream-bg text-partner pb-10">
      <div className="md:flex items-center justify-evenly p-10">
        <div className="md:inline-block mb-4 md:mb-0">
          <section className="flex flex-col gap-12">
            <h1 className="text-2xl md:pl-25 leading-7 sm:text-5xl sm:tracking-tight text-center">
              FAQ PAGE 
            </h1>
          </section>
        </div>

        <div className="md:inline-block w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">Frequently Asked Questions</h2>
          <ul className="flex flex-col font-jost">
            {faqData.map((item, index) => (
              <li className="bg-white my-2 shadow-lg" key={index}>
                <h2
                  onClick={() => handleToggle(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                      activeTab === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"
                    />
                  </svg>
                </h2>
                <div
                  className="border-l-2 border-purple-600 overflow-hidden max-h-0 duration-500 transition-all"
                  style={{ maxHeight: activeTab === index ? '100%' : '0' }}
                >
                  <p className="p-3 text-gray-900">{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const faqData = [
    {
      question: 'What types of commercial properties do you list?',
      answer: 'We list a wide range of commercial properties including office spaces, retail spaces, industrial warehouses, and more. Feel free to explore our listings to find the right property for your business needs.'
    },
    {
      question: 'How can I list my commercial property on your website?',
      answer: 'To list your commercial property on our website, you can create an account and follow the simple steps to list your property. Provide accurate details and attractive images to showcase your property effectively.'
    },
    {
      question: 'What information should I include when listing my property?',
      answer: 'When listing your commercial property, make sure to include essential details such as location, size, type of property, amenities, and any special features. High-quality images and a compelling description will also enhance your listing.'
    },
    {
      question: 'Are there any fees for listing my property?',
      answer: 'We offer different listing packages, some of which may have associated fees. However, we also provide free basic listings. Choose a package that suits your needs and budget.'
    },
    {
      question: 'How can I contact the property owner or agent for more information?',
      answer: 'Each property listing will have contact information for the property owner or the responsible agent. You can reach out to them directly via phone or email to inquire about the property.'
    },
    {
      question: 'What payment methods do you accept for premium listings?',
      answer: 'For premium listings that have associated fees, we accept various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Ensure secure and convenient transactions.'
    },
    {
      question: 'Do you provide assistance in finding the right property for my business?',
      answer: 'Yes, our team is here to assist you in finding the perfect commercial property for your business. Feel free to reach out to us with your requirements, and we will help you find suitable options.'
    }
];
  

export default Faq;
