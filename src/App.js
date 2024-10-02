import React, { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectTypeSelector from "./components/ProjectTypeSelector";
import ViewSelector from "./components/ViewSelector";
import PermissionSelector from "./components/PermissionSelector";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <ProjectForm next={() => setCurrentIndex(1)} back={() => setCurrentIndex(0)} />,
    <ProjectTypeSelector next={() => setCurrentIndex(2)} back={() => setCurrentIndex(0)} />,
    <ViewSelector next={() => setCurrentIndex(3)} back={() => setCurrentIndex(1)} />,
    <PermissionSelector next={() => setCurrentIndex(3)} back={() => setCurrentIndex(2)} />
  ];

  // const handleDotClick = (index) => {
  //   setCurrentIndex(index);
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="w-[35%] mx-auto mt-10">
        {components[currentIndex]}
      </div>
      <div className="flex justify-center mt-4">
        {components.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full transition-colors duration-300 
              ${currentIndex === index ? "bg-gray-600" : "bg-gray-300"}`}
            //onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
