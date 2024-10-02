const ProjectName = ({ formData, handleInputChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Project name</label>
        <input
          type="text"
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter project name here"
        />
      </div>
    );
  };
  
  export default ProjectName;
  