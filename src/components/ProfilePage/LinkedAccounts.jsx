import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LinkedAccounts = () => {
    const [linkedBankAccounts, setLinkedBankAccounts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        // Fetch linked bank account data from the API endpoint
        const fetchLinkedBankAccounts = async () => {
            try {
                const response = await axios.get('/api/v1/profile/linked-accounts/?id=${id}'); // Replace with your API endpoint
                setLinkedBankAccounts(response.data.linkedAccounts); // Assuming the response contains linked bank account data
                setLoading(false);
                // The response.data object will have the following structure:
                // {
                //   data: {
                //     linkedAccounts: [
                //       {
                //         id: 1,
                //         bankName: 'Bank A',
                //         accountNumber: '1234567890',
                //         accountType: 'Savings',
                //         balance: '$5,000',
                //       },
                //       {
                //         id: 2,
                //         bankName: 'Bank B',
                //         accountNumber: '0987654321',
                //         accountType: 'Checking',
                //         balance: '$3,000',
                //       },
                //     ],
                //   },
                // }
            } catch (error) {
                console.error('Error fetching linked bank accounts:', error);
                setLoading(true);
            }
        };

        fetchLinkedBankAccounts();
    }, [id]);

    return (
        <div>
            <h1 className="text-2xl font-semibold py-3">Linked Accounts</h1>
            <p>Manage the accounts linked to your profile. Keep track of your connections and settings.</p>

            {/* Linked Bank Accounts Table */}
            <table className="mt-5 w-full border-collapse border">
                <thead>
                    <tr className="bg-custom-blue text-white">
                        <th className="py-2 px-4 text-left">Bank Name</th>
                        <th className="py-2 px-4 text-left">Account Number</th>
                        <th className="py-2 px-4 text-left">Account Type</th>
                        <th className="py-2 px-4 text-left">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900">Loading...</td>
                        </tr>
                    ) : linkedBankAccounts.length === 0 ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900">No linked bank accounts to display.</td>
                        </tr>
                    ) : (
                        linkedBankAccounts.map((account) => (
                            <tr key={account.id}>
                                <td className="py-2 px-4 text-black">{account.bankName}</td>
                                <td className="py-2 px-4 text-black">{account.accountNumber}</td>
                                <td className="py-2 px-4 text-black">{account.accountType}</td>
                                <td className="py-2 px-4 text-black">{account.balance}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default LinkedAccounts;
