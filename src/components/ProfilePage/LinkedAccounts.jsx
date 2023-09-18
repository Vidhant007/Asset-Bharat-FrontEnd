import React from 'react';

const LinkedAccounts = () => {
    // Sample data for linked bank accounts (you can replace this with your actual data)
    const linkedBankAccounts = [
        {
            id: 1,
            bankName: 'Bank A',
            accountNumber: '1234567890',
            accountType: 'Savings',
            balance: '$5,000',
        },
        {
            id: 2,
            bankName: 'Bank B',
            accountNumber: '0987654321',
            accountType: 'Checking',
            balance: '$3,000',
        },
        // Add more linked bank account data as needed
    ];

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
                    {linkedBankAccounts.map((account) => (
                        <tr key={account.id}>
                            <td className=" py-2 px-4 text-black ">{account.bankName}</td>
                            <td className=" py-2 px-4 text-black ">{account.accountNumber}</td>
                            <td className=" py-2 px-4 text-black ">{account.accountType}</td>
                            <td className=" py-2 px-4 text-black ">{account.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LinkedAccounts;
