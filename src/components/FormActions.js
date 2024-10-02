const FormActions = () => {
    return (
      <div className="flex items-center">
        <button
          type="button"
          className=" mr-[20%] px-4 py-1.5 rounded-md border border-gray-300"
          onClick={() => alert("Go back")}
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-1.5 bg-blue-500 text-white rounded-md">
          Next
        </button>
      </div>
    );
  };
  
  export default FormActions;
  