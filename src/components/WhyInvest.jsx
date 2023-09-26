import React from 'react'
import star from '../assets/star.svg'

const WhyInvest = () => {

  return (
    <div className='bg-custom-blue '>
      <div className='flex flex-col items-center gap-10 justify-center md:pr-100 p-10 '>
        <h2 className='text-3xl md:text-4xl font-krona'>WHY INVEST IN COMMERICIAL ESTATE</h2>
        <h4 className='text-lg md:pr-85 md:pt-10'>Other Investments vs Commericial RealEstate (CRE)</h4>
      </div>
      <div className=' text-white md:flex items-center justify-evenly p-5 md:p-20 pb-20'>
        <div class="flex justify-center items-center hidden md:flex">
          <div class="relative w-96 h-96">

            <div class="w-5 h-96 bg-white absolute top-0 left-25"></div>
            <div class="w-96 h-5 bg-white absolute top-36 left-0"></div>

            <div class="w-24 h-24  absolute top-10 left-10">Residential RealEstate</div>
            <div class="w-24 h-24 text-green-600 absolute top-10 left-60">Commericial RealEstate</div>
            <div class="w-24 h-24  absolute top-60 left-10">Mutual Funds</div>
            <div class="w-24 h-24  absolute top-60 left-60">Stocks & REITS</div>

            <div class="w-24 h-24  absolute top-22 right-100">LOW ROI</div>
            <div class="w-24 h-24  absolute top-22 left-100">HIGH ROI</div>
            <div class="w-24 h-24  absolute bottom-85 left-22">STABLE</div>
            <div class="w-24 h-24  absolute top-100 left-22">VOLATILE</div>

          </div>

        </div>
        <div class="flex justify-center items-center md:hidden">
          <div class="relative w-96 h-96">

            <div class="w-5 h-80 bg-white absolute top-0 left-22"></div>
            <div class="w-72 h-5 bg-white absolute top-36 left-7"></div>

            <div class="w-24 h-24  absolute top-10 left-3">Residential RealEstate</div>
            <div class="w-24 h-24 text-green-600 absolute top-10 left-25">Commericial RealEstate</div>
            <div class="w-24 h-24  absolute top-60 left-3">Mutual Funds</div>
            <div class="w-24 h-24  absolute top-60 left-25">Stocks & REITS</div>

            <div class="w-24 h-24  -rotate-90 absolute top-21 left-0">LOW ROI</div>
            <div class="w-24 h-24  rotate-90 absolute top-21 left-64">HIGH ROI</div>
            <div class="w-24 h-24  absolute bottom-85 left-21">STABLE</div>
            <div class="w-24 h-24  absolute top-80 left-21">VOLATILE</div>

          </div>

        </div>



        <div className="md:inline-block space-y-12">
          <div className='flex gap-7'>
            <img src={star} />
            <div>
              <h4>STABLE FORM OF INVESTMENT</h4>
              <p className='text-sm font-jost'>Investing in commercial real estate has proven to be one of the most <br /> lucrative forms of investment. Unlike other investment options,<br /> commercial real estate offers stable and consistent cash flow,<br /> making it an attractive choice for investors.</p>
            </div>
          </div>

          <div className='flex gap-7'>
            <img src={star} />
            <div>
              <h4>MONTHLY INCOME</h4>
              <p className='text-sm font-jost'>Rental income from CRE and residential properties is substantial and <br /> can go as high as 10% of the total investment size per annum. </p>
            </div>

          </div>

          <div className='flex gap-7'>
            <img src={star} />
            <div>
              <h4>ANNUAL APPRECIATION</h4>
              <p className='text-sm font-jost'>Additionally, the value of commercial properties tends to appreciate <br /> over time, allowing investors to earn substantial returns on their initial <br /> investment. Moreover, commercial real estate investments provide a  <br />certain level of security, as they are backed by tangible assets. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default WhyInvest
