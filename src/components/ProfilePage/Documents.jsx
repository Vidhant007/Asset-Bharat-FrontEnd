import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Documents = () => {
    const [selectedDocumentType, setSelectedDocumentType] = useState('Investment');
    const [propertyFilter, setPropertyFilter] = useState('All');
    const [documentData, setDocumentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        // Fetch user document data from the API endpoint
        const fetchUserDocuments = async () => {
            try {
                const response = await axios.get('/api/v1/profile/documents/?id=${id}');
                setDocumentData(response.data.documents);
                setLoading(false);
                // The response.data object will have the following structure:
                // {
                //   data: {
                //     documents: [
                //       {
                //         id: 1,
                //         documentTitle: 'Document 1',
                //         propertyName: 'Property A',
                //         ownership: 'Owner 1',
                //         date: '2023-09-01',
                //         type: 'Investment',
                //       },
                //       {
                //         id: 2,
                //         documentTitle: 'Document 2',
                //         propertyName: 'Property B',
                //         ownership: 'Owner 2',
                //         date: '2023-09-02',
                //         type: 'Property',
                //       },
                //     ],
                //   },
                // }
            } catch (error) {
                console.error('Error fetching user documents:', error);
                setLoading(true);
            }
        };

        fetchUserDocuments();
    }, [id]);

    // Function to handle document type selection
    const handleDocumentTypeChange = (type) => {
        setSelectedDocumentType(type);
    };

    // Function to handle property filter selection
    const handlePropertyFilterChange = (filter) => {
        setPropertyFilter(filter);
    };

    // Filter documents based on the selected document type and property filter
    const filteredDocuments = documentData.filter((document) => {
        if (selectedDocumentType === 'All' && propertyFilter === 'All') {
            return true; // Show all documents
        } else if (selectedDocumentType === 'All' && propertyFilter !== 'All') {
            return document.ownership === propertyFilter;
        } else if (selectedDocumentType !== 'All' && propertyFilter === 'All') {
            return document.type === selectedDocumentType;
        } else {
            return document.type === selectedDocumentType && document.ownership === propertyFilter;
        }
    });

    return (
        <div>
            <h1 className="text-2xl font-semibold py-3">Documents</h1>
            <p>View and download documents related to your investments</p>

            <div className="flex justify-between items-center py-4">
                {/* Document Type Toggle */}
                <div className="flex mt-4">
                    <button
                        onClick={() => handleDocumentTypeChange('Investment')}
                        className={`${selectedDocumentType === 'Investment' ? 'bg-custom-blue text-white' : 'text-blue-900'
                            } py-2 px-4 rounded-lg mr-4`}
                    >
                        Investment Documents
                    </button>
                    <button
                        onClick={() => handleDocumentTypeChange('Property')}
                        className={`${selectedDocumentType === 'Property' ? 'bg-custom-blue text-white' : 'text-blue-900'
                            } py-2 px-4 rounded-lg mr-4`}
                    >
                        Property Documents
                    </button>
                    <button
                        onClick={() => handleDocumentTypeChange('SPV')}
                        className={`${selectedDocumentType === 'SPV' ? 'bg-custom-blue text-white' : 'text-blue-900'
                            } py-2 px-4 rounded-lg mr-4`}
                    >
                        SPV Documents
                    </button>
                    <button
                        onClick={() => handleDocumentTypeChange('PropertyRelated')}
                        className={`${selectedDocumentType === 'PropertyRelated' ? 'bg-custom-blue text-white' : 'text-blue-900'
                            } py-2 px-4 rounded-lg mr-4`}
                    >
                        Property Related Updates
                    </button>
                </div>

                {/* Filters Section */}
                <div className="flex mt-4">
                    <div className="mr-4">
                        <label htmlFor="propertyFilter" className="text-blue-900">Property Filter:</label>
                        <select
                            id="propertyFilter"
                            value={propertyFilter}
                            onChange={(e) => handlePropertyFilterChange(e.target.value)}
                            className="ml-2 border rounded-lg px-2 py-1 bg-white text-blue-900"
                        >
                            <option value="All">All Properties</option>
                            <option value="Owner 1">Owner 1</option>
                            <option value="Owner 2">Owner 2</option>
                            <option value="Owner 3">Owner 3</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Document Table */}
            <table className="mt-5 w-full border-collapse border">
                <thead>
                    <tr className="bg-custom-blue text-white">
                        <th className="py-2 px-4 text-left" style={{ width: '35%' }}>Document Title</th>
                        <th className="py-2 px-4 text-left" style={{ width: '35%' }}>Property Name</th>
                        <th className="py-2 px-4 text-left" style={{ width: '15%' }}>Ownership</th>
                        <th className="py-2 px-4 text-left" style={{ width: '15%' }}>Date</th>
                    </tr>                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900">Loading...</td>
                        </tr>
                    ) : filteredDocuments.length === 0 ? (
                        <tr>
                            <td className="py-2 px-4 text-blue-900">No documents to display.</td>
                        </tr>
                    ) : (
                        filteredDocuments.map((document) => (
                            <tr key={document.id}>
                                <td className=" py-2 px-4 text-black" style={{ width: '35%' }}>{document.documentTitle}</td>
                                <td className=" py-2 px-4 text-black" style={{ width: '35%' }}>{document.propertyName}</td>
                                <td className=" py-2 px-4 text-black" style={{ width: '15%' }}>{document.ownership}</td>
                                <td className=" py-2 px-4 text-black" style={{ width: '15%' }}>{document.date}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Documents;
