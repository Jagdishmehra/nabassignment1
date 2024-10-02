const Notes = ({ formData, handleInputChange }) => {
    return (
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Optional"
        />
      </div>
    );
  };
  
  export default Notes;
  