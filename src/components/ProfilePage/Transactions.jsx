import React, { useState } from 'react';

const Transactions = () => {
    // Sample data for transactions (you can replace this with your actual data)
    const transactionData = [
        { id: 1, type: 'Buy Transactions', description: 'Transaction 1', transactionId: 'T1', date: '2023-09-05', amount: '$100', fromAccount: 'Account A' },
        { id: 2, type: 'Interest Transactions', description: 'Transaction 2', transactionId: 'T2', date: '2023-09-06', amount: '$50', fromAccount: 'Account B' },
        { id: 3, type: 'Sales Transactions', description: 'Transaction 3', transactionId: 'T3', date: '2023-09-07', amount: '$10', fromAccount: 'Account C' },
        { id: 4, type: 'Rewards', description: 'Transaction 4', transactionId: 'T4', date: '2023-09-08', amount: '$75', fromAccount: 'Account D' },
        { id: 5, type: 'Rewards', description: 'Transaction 5', transactionId: 'T5', date: '2023-09-08', amount: '$75', fromAccount: 'Account D' },
        // Add more transactions for different types
    ];

    // State for selected transaction type filter
    const [selectedTransactionType, setSelectedTransactionType] = useState('All Transactions');

    // Function to handle transaction type filter change
    const handleTransactionTypeChange = (type) => {
        setSelectedTransactionType(type);
    };

    return (
        <div>
            <h1 className="text-2xl font-semibold py-4">Transactions</h1>
            <p className="mb-4">View and manage your recent transactions here. Stay updated on your financial activity.</p>

            {/* Transaction Type Toggle */}
            <div className="flex flex-wrap justify-center mb-4">
                <button
                    onClick={() => handleTransactionTypeChange('All Transactions')}
                    className={`${
                        selectedTransactionType === 'All Transactions'
                            ? 'bg-custom-blue text-white'
                            : 'text-blue-900'
                    } py-2 px-4 rounded-lg mb-2 mr-2`}
                >
                    All Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Buy Transactions')}
                    className={`${
                        selectedTransactionType === 'Buy Transactions'
                            ? 'bg-custom-blue text-white'
                            : 'text-blue-900'
                    } py-2 px-4 rounded-lg mb-2 mr-2`}
                >
                    Buy Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Interest Transactions')}
                    className={`${
                        selectedTransactionType === 'Interest Transactions'
                            ? 'bg-custom-blue text-white'
                            : 'text-blue-900'
                    } py-2 px-4 rounded-lg mb-2 mr-2`}
                >
                    Interest Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Sales Transactions')}
                    className={`${
                        selectedTransactionType === 'Sales Transactions'
                            ? 'bg-custom-blue text-white'
                            : 'text-blue-900'
                    } py-2 px-4 rounded-lg mb-2 mr-2`}
                >
                    Sales Transactions
                </button>
                <button
                    onClick={() => handleTransactionTypeChange('Rewards')}
                    className={`${
                        selectedTransactionType === 'Rewards'
                            ? 'bg-custom-blue text-white'
                            : 'text-blue-900'
                    } py-2 px-4 rounded-lg mb-2 mr-2`}
                >
                    Rewards
                </button>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border">
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
                        {transactionData
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
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Transactions;
