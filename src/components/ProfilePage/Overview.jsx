import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Overview = () => {
    const [recentInvestments, setRecentInvestments] = useState([]);
    const [investmentsByLocation, setInvestmentsByLocation] = useState([]);
    const [investmentsByAssetType, setInvestmentsByAssetType] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                const response = await axios.get('/api/v1/profile/investments/?id=${id}');
                setRecentInvestments(response.data.recentInvestments);
                setInvestmentsByLocation(response.data.investmentsByLocation);
                setInvestmentsByAssetType(response.data.investmentsByAssetType);
                setLoading(false);

                // The response.data object will have the following structure:
                // {
                //   data: {
                //     recentInvestments: [
                //       {
                //         id: 1,
                //         type: 'Property',
                //         amountInvested: '$1000',
                //         date: '2023-09-10',
                //       },
                //       {
                //         id: 2,
                //         type: 'Factory',
                //         amountInvested: '$2000',
                //         date: '2023-09-11',
                //       },
                //    ],
                //     investmentsByLocation: [
                //       {
                //         id: 1,
                //         propertyName: 'Property A',
                //         location: 'Location X',
                //       },
                //       {
                //         id: 2,
                //         propertyName: 'Property B',
                //         location: 'Location Y',
                //       },
                //     ],
                //     investmentsByAssetType: [
                //       {
                //         id: 1,
                //         assetType: 'Property',
                //         amountInvested: '$1000',
                //       },
                //       {
                //         id: 2,
                //         assetType: 'Factory',
                //         amountInvested: '$2000',
                //       },
                //     ],
                //   },
                // }

            } catch (error) {
                console.error('Error fetching investments:', error);
                setLoading(true);
            }
        };

        fetchInvestments();
    }, [id]);

    // Function to check if there are no recent investments
    const hasNoRecentInvestments = recentInvestments.length === 0;
    const hasNoLocationInvestments = investmentsByLocation.length === 0;
    const hasNoAssetTypeInvestments = investmentsByAssetType.length === 0;

    if (loading) {
        return (
            <div className="flex justify-center items-center flex-col">
                <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"></div>
                <p className="mt-4 text-blue-900 text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-20">
            <div className="flex gap-3 justify-between mt-4">
                <div className="w-2/3 p-4 text-black border bg-white rounded shadow">
                    <h2 className="text-lg font-semibold mb-2">Finish your KYC to start investing</h2>
                    <p>
                        KYC is an important process that helps us verify your identity and ensure the security of your account.
                        Completing KYC is essential for accessing certain features and maintaining a secure financial environment.
                    </p>
                    <div className='flex justify-between items-center mt-4'>
                        <a>Personal Info</a>
                        <a> Address</a>
                        <a>PAN</a>
                        <a>Bank Account</a>
                        <a
                            href="/kyc"
                            rel="noopener noreferrer"
                            className=" block bg-custom-blue text-white py-2 px-4 rounded-lg text-center"
                        >
                            Start KYC
                        </a>
                    </div>
                </div>

                <div className="w-1/3 p-4 bg-white border rounded shadow" >
                    {/* Card Content */}
                </div>
            </div>


            <div className='h-96 mt-4 bg-white rounded shadow' style={{ height: '400px' }}>
                <div className="mt-4">
                    {hasNoRecentInvestments ? (
                        <div className="mt-4 p-4 bg-white border rounded shadow h-full text-center">
                            <p>You have not made any recent investments yet.</p>
                            <a href="/property" className="block bg-custom-blue text-white py-2 px-4 rounded-lg text-center mt-4">
                                View Properties
                            </a>
                            <a href="/about-us" className="block text-blue-600 text-white pb-2 px-4 rounded-lg text-center mt-4">
                                Learn More
                            </a>
                        </div>
                    ) : (
                        <table className="w-full border-collapse text-black text-center border">
                            <thead>
                                <tr className="bg-custom-blue text-white">
                                    <th className="py-2 px-4">Investment ID</th>
                                    <th className="py-2 px-4">Investment Type</th>
                                    <th className="py-2 px-4">Amount Invested</th>
                                    <th className="py-2 px-4">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentInvestments.map((investment) => (
                                    <tr key={investment.id}>
                                        <td className=" py-2 px-4">{investment.id}</td>
                                        <td className=" py-2 px-4">{investment.type}</td>
                                        <td className=" py-2 px-4">{investment.amountInvested}</td>
                                        <td className=" py-2 px-4">{investment.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>

            {/* Investments by Location */}
            <div className="flex justify-between mt-4 gap-3">
                <div className="w-1/2 p-4 bg-white border rounded shadow" style={{ height: '300px', overflowY: 'auto' }}>
                    <h2 className="text-lg font-semibold mb-2">Investments by Location</h2>
                    {hasNoLocationInvestments ? (
                        <p>No investments by location yet.</p>
                    ) : (
                        <table className="w-full text-black border-collapse text-center">
                            <thead>
                                <tr className="bg-custom-blue text-white">
                                    <th className="py-2 px-4">Property Name</th>
                                    <th className="py-2 px-4">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investmentsByLocation.map((investment) => (
                                    <tr key={investment.id}>
                                        <td className=" py-2 px-4">{investment.propertyName}</td>
                                        <td className=" py-2 px-4">{investment.location}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Investments by Asset Type */}
                <div className="w-1/2 p-4 bg-white border rounded shadow" style={{ height: '300px', overflowY: 'auto' }}>
                    <h2 className="text-lg font-semibold mb-2">Investments by Asset Type</h2>
                    {hasNoAssetTypeInvestments ? (
                        <p>No investments by asset type yet.</p>
                    ) : (
                        <table className="w-full text-black border-collapse text-center">
                            <thead>
                                <tr className="bg-custom-blue text-white">
                                    <th className="py-2 px-4">Asset Type</th>
                                    <th className="py-2 px-4">Amount Invested</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investmentsByAssetType.map((investment) => (
                                    <tr key={investment.id}>
                                        <td className=" py-2 px-4">{investment.assetType}</td>
                                        <td className=" py-2 px-4">{investment.amountInvested}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Overview;
