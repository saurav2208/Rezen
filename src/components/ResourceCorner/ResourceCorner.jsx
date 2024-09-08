import React from "react";

const resources = [
  {
    id: 1,
    title: "Body Scan Meditation",
    color: "bg-yellow-300",
    category: "Quick And Easy",
  },
  { id: 2, title: "PMR", color: "bg-blue-300", category: "Quick And Easy" },
  {
    id: 3,
    title: "Worry Tree",
    color: "bg-orange-300",
    category: "Quick And Easy",
  },
  {
    id: 4,
    title: "Pomodoro Technique",
    color: "bg-purple-300",
    category: "Quick And Easy",
  },
  {
    id: 5,
    title: "Self Assessment 1",
    color: "bg-blue-300",
    category: "Self Assessments",
  },
  {
    id: 6,
    title: "Self Assessment 2",
    color: "bg-green-300",
    category: "Self Assessments",
  },
  {
    id: 7,
    title: "Self Assessment 3",
    color: "bg-yellow-300",
    category: "Self Assessments",
  },
];

const ResourceCorner = () => {
  const handleClick = (title) => {
    alert(`You clicked on ${title}!`);
    // You can add more functionality here, such as navigating to another page
  };

  return (
    <div className="bg-gray-50 p-12 min-h-screen">
      {/* Section for Quick and Easy resources */}
      <h2 className="text-4xl font-bold text-primary mb-8 text-center text-custom-blue">
        Quick And Easy
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {resources
          .filter((resource) => resource.category === "Quick And Easy")
          .map((resource) => (
            <button
              key={resource.id}
              onClick={() => handleClick(resource.title)}
              className={`${resource.color} rounded-xl shadow-xl w-52 h-40 flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 focus:outline-none`}
            >
              <p className="text-gray-800 font-semibold text-lg">
                {resource.title}
              </p>
            </button>
          ))}
      </div>

      {/* Section for Self Assessments */}
      <h2 className="text-4xl font-bold text-primary mb-8 text-center text-custom-blue">
        Self Assessments
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {resources
          .filter((resource) => resource.category === "Self Assessments")
          .map((resource) => (
            <button
              key={resource.id}
              onClick={() => handleClick(resource.title)}
              className={`${resource.color} rounded-xl shadow-xl w-52 h-40 flex items-center justify-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-1 focus:outline-none`}
            >
              <p className="text-gray-800 font-semibold text-lg">
                {resource.title}
              </p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default ResourceCorner;
