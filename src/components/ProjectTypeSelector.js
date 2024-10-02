import React, { useState, useEffect } from 'react';

const ProjectTypeSelector = ({ next, back }) => {
    const [hourlyRate, setHourlyRate] = useState('');
    const [budgetPercentage, setBudgetPercentage] = useState(80);
    const [resetMonthly, setResetMonthly] = useState(false);
    const [sendAlerts, setSendAlerts] = useState(true);

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("projectTypeData"));
        if (savedData) {
            setHourlyRate(savedData.hourlyRate);
            setBudgetPercentage(savedData.budgetPercentage);
            setResetMonthly(savedData.resetMonthly);
            setSendAlerts(savedData.sendAlerts);
        }
    }, []);

    const handleNext = () => {
        const projectTypeData = { hourlyRate, budgetPercentage, resetMonthly, sendAlerts };
        localStorage.setItem("projectTypeData", JSON.stringify(projectTypeData));
        next();
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Project type</h2>
            <p className="text-gray-600 mb-4">Don't panic — You can also customize this types in settings</p>
            
            <div className="flex mb-4">
                <button className="flex-1 py-2 bg-blue-500 text-white rounded-lg">Time & Materials</button>
                <button className="flex-1 py-2 mx-2 bg-gray-200 rounded-lg">Fixed Fee</button>
                <button className="flex-1 py-2 bg-gray-200 rounded-lg">Non-Billable</button>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Hourly</label>
                <input
                    type="text"
                    value={`₹ ${hourlyRate}`}
                    placeholder='12678.00'
                    onChange={(e) => setHourlyRate(e.target.value.replace(/[^0-9.]/g, ''))}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Budget</label>
                <select className="border border-gray-300 rounded-lg p-2 w-full mb-2">
                    <option>Hours per Person</option>
                </select>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={resetMonthly}
                        onChange={() => setResetMonthly(!resetMonthly)}
                        className="mr-2"
                    />
                    <label className="text-sm">Budget resets every month</label>
                </div>
                <div className="flex items-center mt-2">
                    <input
                        type="checkbox"
                        checked={sendAlerts}
                        onChange={() => setSendAlerts(!sendAlerts)}
                        className="mr-2"
                    />
                    <label className="text-sm">Send email alerts if project exceeds</label>
                    <input
                        type="number"
                        value={budgetPercentage}
                        onChange={(e) => setBudgetPercentage(e.target.value)}
                        className="border border-gray-300 rounded-lg p-1 w-16 ml-2"
                    />
                    <span className="text-sm">% of budget</span>
                </div>
            </div>

            <div className="flex">
                <button onClick={back} className="py-2 mr-[25%] px-4 border border-gray-300 rounded-lg">Back</button>
                <button onClick={handleNext} className="py-2 px-4 bg-blue-500 text-white rounded-lg">Next</button>
            </div>
        </div>
    );
};

export default ProjectTypeSelector;
