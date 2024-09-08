import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For arrow icons

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // Single state to control sliding
  const [slideDirection, setSlideDirection] = useState("right"); // Direction state to control slide direction

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "Designer",
      text: "“This app has transformed how I approach mental health. The variety of therapy options and the community support are unmatched.”",
      avatar: "../../../public/Images/avatar1.png",
    },
    {
      name: "Michael Brown",
      role: "Marketing Manager",
      text: "“Incredible experience! The personalized therapy plans are exactly what I needed to manage my stress and improve my overall well-being.”",
      avatar: "../../../public/Images/avatar2.png",
    },
    {
      name: "Sarah Lee",
      role: "Content Creator",
      text: "“The 24/7 support is a lifesaver. The app's user-friendly interface and effective tools have been invaluable in my mental health journey.”",
      avatar: "../../../public/Images/avatar3.png",
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      text: "“I appreciate the customization and the vast range of resources available. It’s clear that a lot of thought went into this app.”",
      avatar: "../../../public/Images/avatar4.png",
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      text: "“The seamless integration of features and the user-centric design make this app an indispensable tool for mental wellness.”",
      avatar: "../../../public/Images/avatar5.png",
    },
    {
      name: "James Wilson",
      role: "Software Engineer",
      text: "“This app's ability to adapt to my needs and the constant updates ensure that I'm always getting the best support possible.”",
      avatar: "../../../public/Images/avatar6.png",
    },
    {
      name: "Olivia Martinez",
      role: "HR Specialist",
      text: "“A fantastic platform with innovative solutions for mental health. The resources and support available are second to none.”",
      avatar: "../../../public/Images/avatar7.png",
    },
  ];

  const handleSlideChange = (direction) => {
    if (isSliding) return; // Prevent multiple animations at once
    setIsSliding(true); // Start the sliding animation
    setSlideDirection(direction);

    // Wait for the slide-out animation to complete before changing the index
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "right"
          ? (prevIndex + 1) % testimonials.length
          : (prevIndex - 1 + testimonials.length) % testimonials.length
      );
      setTimeout(() => setIsSliding(false), 250); // Complete the slide-in after the animation (250ms)
    }, 250); // Match with the new animation duration (250ms)
  };

  const handlePrev = () => handleSlideChange("left");

  const handleNext = () => handleSlideChange("right");

  // Auto-slide feature
  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds

    return () => clearInterval(autoSlide); // Clean up interval on component unmount
  }, []); // No dependencies, runs once on mount

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-custom-blue-dark mb-16">
          What Our Users Are Saying
        </h2>
        <div className="relative overflow-hidden mb-6">
          <div className="flex justify-center">
            <div
              className={`bg-gradient-to-r from-gray-300 via-blue-50 to-custom-white shadow-lg rounded-lg p-8 max-w-lg mx-auto transition-transform duration-250 ${
                isSliding
                  ? slideDirection === "right"
                    ? "transform translate-x-full"
                    : "transform -translate-x-full"
                  : "transform translate-x-0"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                />
                <div className="ml-4 text-left">
                  <p className="text-lg font-semibold text-custom-blue">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {testimonials[currentIndex].text}
              </p>
            </div>
          </div>
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-custom-blue text-white p-3 rounded-full shadow-lg hover:bg-custom-blue-dark focus:outline-none transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-custom-blue text-white p-3 rounded-full shadow-lg hover:bg-custom-blue-dark focus:outline-none transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
