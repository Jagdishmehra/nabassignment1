const ClientSelection = ({ formData, handleInputChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Client</label>
        <div className="flex space-x-2">
          <select
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="font-light mt-1 w-[60%] border border-gray-300 rounded-md ">
            <option value="">Select a client</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 2">Client 2</option>
          </select>
          <h1 className="mt-2 text-gray-200">or</h1>
          <button className="font-light px-4 py-2 border border-gray-300 rounded-md">+ New Client</button>
        </div>
      </div>
    );
  };
  
  export default ClientSelection;
  