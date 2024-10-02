import React, { useState, useEffect } from 'react';

const PermissionSelector = ({ next, back }) => {
    const [selectedPermission, setSelectedPermission] = useState('everyone');

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("permissionData"));
        if (savedData) {
            setSelectedPermission(savedData.selectedPermission);
        }
    }, []);

    const handleNext = () => {
        const permissionData = { selectedPermission };
        localStorage.setItem("permissionData", JSON.stringify(permissionData));
        next();
    };

    const permissions = [
        {
            id: 'everyone',
            title: 'Everyone',
            description: 'All users can now to see it, but guests cannot access the projects.',
        },
        {
            id: 'admins',
            title: "Only Admin's",
            description: 'Only admins can manage everything.',
        },
        {
            id: 'specific',
            title: 'Only to Specific people',
            description: 'Only some specific people can able to see it.',
        },
    ];

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="flex justify-center text-2xl font-semibold mb-4">Who can manage projects</h2>
            <p className="text-gray-600 mb-4">Don't panic — You can also customize this permissions in settings</p>
            
            <div className="space-y-4">
                {permissions.map((permission) => (
                    <div
                        key={permission.id}
                        onClick={() => setSelectedPermission(permission.id)}
                        className={`p-4 border rounded-lg cursor-pointer transition duration-200 
                            ${selectedPermission === permission.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                    >
                        <h3 className="font-medium">{permission.title}</h3>
                        <p className="text-gray-500">{permission.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex mt-2">
                <button className="py-2 mr-[25%] px-4 border border-gray-300 rounded-lg" onClick={back}>Back</button>
                <button className="py-2 px-4 bg-blue-500 text-white rounded-lg" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default PermissionSelector;
