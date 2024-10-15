import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

interface Step {
  title: string;
  description: string;
}

interface HowWeSelectExpertsProps {
  steps: Step[];
  expertImages: string[];
}

const HowWeSelectExperts: React.FC<HowWeSelectExpertsProps> = ({ steps, expertImages }) => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleExploreClick = () => {
    navigate('/categories'); // Navigate to the categories page
  };

  return (
    <div className="therapist__content bg-gray-200 w-full py-12">
      {/* Section Title */}
      <h1 className="therapist__title text-3xl font-bold text-center mb-8">
      Как мы выбираем экспертов      </h1>

      {/* Expert Images */}
      <div className="therapist__images flex justify-center mb-8 space-x-4">
        {expertImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Expert ${index + 1}`}
            className="w-20 h-20 rounded-full object-cover shadow-lg"
          />
        ))}
      </div>

      {/* Steps on How We Choose Experts */}
      <div className="therapist__list space-y-12 max-w-3xl mx-auto px-4 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4 relative">
            <div className="relative p-1">
              <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                <IoCheckmarkSharp className="text-white text-xl" />
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-1/2 top-10 bottom-0 w-px h-28 bg-blue-800"></div>
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="therapist__actions flex justify-center mt-8">
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg"
          onClick={handleExploreClick} // Add the onClick event to navigate
        >
Начать изучение        
</Button>
      </div>
    </div>
  );
};

export default HowWeSelectExperts;
