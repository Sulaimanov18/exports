import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Define a type for the expert
type Expert = {
  id: number;
  name: string;
  profession: string;
  imageUrl: string;
  story: string;
  link: string; // Link to read more about the post
};

// Expert data - Using real images and links
const experts: Expert[] = [
  {
    id: 1,
    name: 'John Doe',
    profession: 'Fitness Coach',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682435111671-dc6542c642e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'John turned his life around through fitness and now helps others achieve their goals.',
    link: '/pages/fitness-coach', // Update link to the route you want
  },
  {
    id: 2,
    name: 'Jane Smith',
    profession: 'Relationship Counselor',
    imageUrl: 'https://images.unsplash.com/photo-1651690802122-0611d2734232?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'Jane specializes in helping couples navigate their challenges and build stronger relationships.',
    link: '/pages/relationship-counselor', // Update link to the route you want
  },
  // Add more experts as needed
];

const ExpertShowcase: React.FC = () => {
  const [currentExpertIndex, setCurrentExpertIndex] = useState<number>(0);

  // Function to change the expert
  const changeExpert = () => {
    const nextIndex = (currentExpertIndex + 1) % experts.length;
    setCurrentExpertIndex(nextIndex);
  };

  // Automatically change expert every 10 seconds
  useEffect(() => {
    const interval = setInterval(changeExpert, 10000); // Change every 10 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentExpertIndex]);

  // Get the current expert based on the index
  const currentExpert = experts[currentExpertIndex];

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-[400px] bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${currentExpert.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for text visibility */}
      <div className="relative z-10 text-center p-6">
        <h2 className="text-3xl font-bold">{currentExpert.name}</h2>
        <h3 className="text-xl italic mb-4">{currentExpert.profession}</h3>
        <p className="mb-4">{currentExpert.story}</p>
        <Link 
          to={currentExpert.link} // Use Link for navigation
          className="bg-bright-green text-white py-2 px-4 rounded-lg shadow-md hover:bg-dark-green transition duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ExpertShowcase;
