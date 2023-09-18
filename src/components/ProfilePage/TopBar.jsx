import React from 'react';

const userData = {
    name: 'John Doe',
    profilePic: 'url_to_profile_pic.jpg',
    totalAmountInvested: '$50,000',
    totalInterest: '$5,000',
};

const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-6 py-2 bg-white border-b-2">
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
        </div>
    );
};

export default TopBar;