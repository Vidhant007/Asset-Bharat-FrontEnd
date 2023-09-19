import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Transactions = () => {
    const [transactionData, setTransactionData] = useState([]);
    const [selectedTransactionType, setSelectedTransactionType] = useState('All Transactions');
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const fetchTransactionData = async () => {
            try {
                const response = await axios.get('/api/v1/profile/transactions/?id=${id}');
                setTransactionData(response.data.transactions);
                setLoading(false);
                // The response.data object will have the following structure:
                // {
                //   data: {
                //     transactions: [
                //       {
                //         id: 1,
                //         type: 'Buy Transactions',
                //         description: 'Transaction 1',
                //         transactionId: 'T1',
                //         date: '2023-09-05',
                //         amount: '$100',
                //         fromAccount: 'Account A',
                //       },
                //       {
                //         id: 2,
                //         type: 'Interest Transactions',
                //         description: 'Transaction 2',
                //         transactionId: 'T2',
                //         date: '2023-09-06',
                //         amount: '$50',
                //         fromAccount: 'Account B',
                //       },
                //    ]
                //   },
                // }
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setLoading(true);
            }
        };

        fetchTransactionData();
    }, [id]);

    // Function to handle transaction type filter change
    const handleTransactionTypeChange = (type) => {
        setSelectedTransactionType(type);
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold py-3">Transactions</h1>
            <p>View and manage your recent transactions here. Stay updated on your financial activity.</p>

            {/* Transaction Type Toggle */}
            <div className="mt-4">
                <button
                    onClick={() => handleTransactionTypeChange('All Transactions')}
                    className={`${selectedTransactionType === 'All Transactions'
                        ? 'bg-custom-blue text-white'
                        : 'text-blue-900'
                        } py-2 px-4 rounded-lg mr-4`}
                >
                    All Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Buy Transactions')}
                    className={`${selectedTransactionType === 'Buy Transactions'
                        ? 'bg-custom-blue text-white'
                        : 'text-blue-900'
                        } py-2 px-4 rounded-lg mr-4`}
                >
                    Buy Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Interest Transactions')}
                    className={`${selectedTransactionType === 'Interest Transactions'
                        ? 'bg-custom-blue text-white'
                        : 'text-blue-900'
                        } py-2 px-4 rounded-lg mr-4`}
                >
                    Interest Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Sales Transactions')}
                    className={`${selectedTransactionType === 'Sales Transactions'
                        ? 'bg-custom-blue text-white'
                        : 'text-blue-900'
                        } py-2 px-4 rounded-lg mr-4`}
                >
                    Sales Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Rewards')}
                    className={`${selectedTransactionType === 'Rewards'
                        ? 'bg-custom-blue text-white'
                        : 'text-blue-900'
                        } py-2 px-4 rounded-lg mr-4`}
                >
                    Rewards
                </button>
            </div>

            {/* Transactions Table */}
            <table className="mt-4 w-full border-collapse border">
                <thead>
                    <tr className="bg-custom-blue text-white">
                        <th className="py-2 px-4 text-left">Transaction ID</th>
                        <th className="py-2 px-4 text-left">Date</th>
                        <th className="py-2 px-4 text-left">Amount</th>
                        <th className="py-2 px-4 text-left">From Account</th>
                        <th className="py-2 px-4 text-left">Description</th>
                        {selectedTransactionType === 'All Transactions' && <th className="py-2 px-4">Transaction Type</th>}
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900" colSpan={6}>
                                Loading...
                            </td>
                        </tr>
                    ) : transactionData.length === 0 ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900" colSpan={6}>
                                No transactions to display.
                            </td>
                        </tr>
                    ) : (
                        transactionData
                            .filter((transaction) => {
                                if (selectedTransactionType === 'All Transactions') {
                                    return true; // Show all transactions
                                } else {
                                    return transaction.type === selectedTransactionType;
                                }
                            })
                            .map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className=" py-2 px-4 text-black">{transaction.transactionId}</td>
                                    <td className=" py-2 px-4 text-black">{transaction.date}</td>
                                    <td className=" py-2 px-4 text-black">{transaction.amount}</td>
                                    <td className=" py-2 px-4 text-black">{transaction.fromAccount}</td>
                                    <td className=" py-2 px-4 text-black">{transaction.description}</td>
                                    {selectedTransactionType === 'All Transactions' && (
                                        <td className="py-2 px-4 text-black">{transaction.type}</td>
                                    )}
                                </tr>
                            ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;
