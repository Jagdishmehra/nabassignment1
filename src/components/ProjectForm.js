import React, { useState, useEffect } from "react";
import ProjectName from "./ProjectName";
import ClientSelection from "./ClientSelection";
import DateRange from "./DateRange";
import Notes from "./Notes";

const ProjectForm = ({ next, back }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    notes: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("projectData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.projectName || !formData.client || !formData.startDate || !formData.endDate) {
      setError("All fields except 'Notes' are required.");
      return;
    }
    localStorage.setItem("projectData", JSON.stringify(formData));
    next(); // Move to the next component after saving
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a project</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <ProjectName formData={formData} handleInputChange={handleInputChange} />
        <ClientSelection formData={formData} handleInputChange={handleInputChange} />
        <DateRange formData={formData} handleInputChange={handleInputChange} />
        <Notes formData={formData} handleInputChange={handleInputChange} />
        <div className="flex">
          <button type="button" onClick={back} className="py-2 mr-[25%] px-4 border border-gray-300 rounded-lg">Back</button>
          <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">Next</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
