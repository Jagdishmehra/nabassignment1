const DateRange = ({ formData, handleInputChange }) => {
    return (
      <div className="mb-4 flex space-x-2">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            className="font-light mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            className="font-light mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
    );
  };
  
  export default DateRange;
  