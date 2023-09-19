import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TopBar = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/v1/profile/getname_amount/?id=${id}');
        setUserData(response.data);
        // The response.data object will have the following structure:
        // {
        // data: {
        //     name: 'John Doe',
        //     profilePic: 'https://example.com/profile-pic.jpg',
        //     totalAmountInvested: 100000,
        //     totalInterest: 10000,
        //   },
        // }


      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [id]);

  return (
    <div className="flex justify-between items-center px-6 py-2 bg-white border-b-2">
      {userData ? (
        <>
          {/* Left side with profile pic and name */}
          <div className="flex items-center">
            <img
              src={userData.profilePic}
              alt="DP"
              className="w-12 h-12 rounded-full mr-4 border-2"
            />
            <span className="text-xl font-semibold text-custom-blue">
              {userData.name}
            </span>
          </div>
          {/* Right side with total amount invested and total interest */}
          <div className="text-sm flex items-center gap-100 px-40">
            <div className="text-3xl font-semibold text-custom-blue">
              {userData.totalAmountInvested}
              <div className="text-xs text-custom-blue">Total Amount Invested</div>
            </div>
            <div className="text-3xl font-semibold text-custom-blue ml-4">
              {userData.totalInterest}
              <div className="text-xs text-custom-blue">Total Interest</div>
            </div>
          </div>
        </>
      ) : (
        <p className='text-black'>Loading user profile...</p>
      )}
    </div>
  );
};

export default TopBar;
