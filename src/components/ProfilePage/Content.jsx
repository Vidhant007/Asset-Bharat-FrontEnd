import React from 'react';
import Overview from './Overview';
import Transactions from './Transactions';
import Reports from './Reports';
import Documents from './Documents';
import LinkedAccounts from './LinkedAccounts';

const ProfileContent = ({ selectedContent }) => {
    return (
        <div className="container mx-auto">
            {selectedContent === 'overview' && <Overview />}
            {selectedContent === 'transactions' && <Transactions />}
            {selectedContent === 'reports' && <Reports />}
            {selectedContent === 'documents' && <Documents />}
            {selectedContent === 'linked-accounts' && <LinkedAccounts />}
        </div>
    );
};

export default ProfileContent;
