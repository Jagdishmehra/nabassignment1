import React, { useState, useEffect } from 'react';

const ViewSelector = ({ next, back }) => {
    const [selectedView, setSelectedView] = useState('list');

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("viewData"));
        if (savedData) {
            setSelectedView(savedData.selectedView);
        }
    }, []);

    const handleNext = () => {
        const viewData = { selectedView };
        localStorage.setItem("viewData", JSON.stringify(viewData));
        next();
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Select a view</h2>
            <p className="text-gray-600 mb-4">You can also customize this views in settings</p>
            
            <div className="flex justify-around mb-6">
                <div 
                    onClick={() => setSelectedView('list')}
                    className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${selectedView === 'list' ? 'border-blue-500' : 'border-gray-300'}`}
                >
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    <span>List</span>
                </div>
                <div 
                    onClick={() => setSelectedView('board')}
                    className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer ${selectedView === 'board' ? 'border-blue-500' : 'border-gray-300'}`}
                >
                    <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z" />
                    </svg>
                    <span>Board</span>
                </div>
            </div>

            <div className="flex">
                <button onClick={back} className="py-2 mr-[25%] px-4 border border-gray-300 rounded-lg">Back</button>
                <button onClick={handleNext} className="py-2 px-4 bg-blue-500 text-white rounded-lg">Next</button>
            </div>
        </div>
    );
};

export default ViewSelector;