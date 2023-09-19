import React, { useState } from 'react';

const Reports = () => {
    // Sample data for investor interest reports (you can replace this with your actual data)
    const investorInterestReports = [
        { date: '2022-01-15', link: '/reports/2022' },
        { date: '2022-03-20', link: '/reports/2022-2' },
        { date: '2021-12-10', link: '/reports/2021' },
        { date: '2020-11-05', link: '/reports/2020' },
        // Add more reports for different dates
    ];

    // State for selected year filter
    const [selectedYear, setSelectedYear] = useState('All');

    // Function to handle year filter change
    const handleYearChange = (year) => {
        setSelectedYear(year);
    };

    // Filter unique years from the reports
    const uniqueYears = [...new Set(investorInterestReports.map((report) => report.date.substring(0, 4)))];

    // Filter reports based on the selected year
    const filteredReports = investorInterestReports.filter((report) => {
        return selectedYear === 'All' || report.date.startsWith(selectedYear);
    });

    return (
        <div>
            <h1 className="text-2xl font-semibold py-3">Reports</h1>
            <p> Check out your investor interest reports here. </p>

            {/* Year Filter Dropdown */}
            <div className="mt-4">
                <label htmlFor="yearFilter" className="text-blue-900">Select Year:</label>
                <select
                    id="yearFilter"
                    value={selectedYear}
                    onChange={(e) => handleYearChange(e.target.value)}
                    className="ml-2 border rounded-lg px-2 py-1 bg-white text-blue-900"
                >
                    <option value="All">All Years</option>
                    {uniqueYears.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </div>

            {/* Investor Interest Reports Table */}
            <table className="mt-4 w-full border-collapse border">
                <thead>
                    <tr className="bg-custom-blue text-white">
                        <th className="py-2 px-4" style={{ width: '15%' }}>Date</th>
                        <th className="py-2 px-4" style={{ width: '85%' }}>Report</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.length === 0 && (
                        <tr>
                            <td className="border py-2 px-4" colSpan={2}>
                                No reports to display.
                            </td>
                        </tr>
                    )}
                    {filteredReports.map((report, index) => (
                        <tr key={report.date}>
                            <td className=" py-2 px-4 text-black text-center">{report.date}</td>
                            <td className=" py-2 px-4 text-center">
                                <a href={report.link} className="text-custom-blue underline">
                                    Investor Interest Report dt. {report.date}
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reports;
