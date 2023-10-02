import React from 'react';
import { FaUser, FaExchangeAlt, FaChartBar, FaFileAlt, FaLink,FaSignOutAlt } from 'react-icons/fa';

const LeftSidebar = ({ selectedContent, handleContentChange,setSignedIn,logOut }) => {
  return (
    <div className="left-sidebar bg-white p-3 border shadow" style={{ width: '13%' }}>
      <button
        onClick={() => handleContentChange('overview')}
        className={`${selectedContent === 'overview'
          ? 'bg-custom-blue text-white font-bold'
          : 'text-blue-900'
          } py-4 px-4 rounded-lg mb-2 w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          <FaUser className="mr-2" /> 
          <div className="hidden md:flex">
            Overview
          </div>
        </span>
      </button>
      <button
        onClick={() => handleContentChange('transactions')}
        className={`${selectedContent === 'transactions'
          ? 'bg-custom-blue text-white font-bold'
          : 'text-blue-900'
          } py-4 px-4 rounded-lg mb-2 w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          <FaExchangeAlt className="mr-2" />
          <div className="hidden md:flex">
            Transactions
          </div>
        </span>
      </button>
      <button
        onClick={() => handleContentChange('reports')}
        className={`${selectedContent === 'reports'
          ? 'bg-custom-blue text-white font-bold'
          : 'text-blue-900'
          } py-4 px-4 rounded-lg mb-2 w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          <FaChartBar className="mr-2" /> 
          <div className="hidden md:flex">
            Reports
          </div>
        </span>
      </button>
      <button
        onClick={() => handleContentChange('documents')}
        className={`${selectedContent === 'documents'
          ? 'bg-custom-blue text-white font-bold'
          : 'text-blue-900'
          } py-4 px-4 rounded-lg mb-2 w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          <FaFileAlt className="mr-2" /> 
          <div className="hidden md:flex">
            Documents
          </div>
        </span>
      </button>
      <button
        onClick={() => handleContentChange('linked-accounts')}
        className={`${selectedContent === 'linked-accounts'
          ? 'bg-custom-blue text-white font-bold'
          : 'text-blue-900'
          } py-4 px-4 rounded-lg w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center`}
      >
        <span className="flex items-center">
          <FaLink className="mr-2" /> 
          <div className="hidden md:flex">
            Linked Accounts
          </div>
        </span>
      </button>

      <button
        onClick={()=>logOut(true)}
        className = "py-4 px-4 rounded-lg w-full text-left hover:bg-blue-800 hover:text-white hover:font-bold transition duration-300 flex justify-between items-center"
      >
        <span className="flex items-center">
          <FaSignOutAlt className="mr-2" /> 
          <div className="hidden md:flex">
            Log Out
          </div>
        </span>
      </button>
    </div>
  );
};

export default LeftSidebar;
