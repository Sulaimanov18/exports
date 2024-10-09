import React, { useState, useEffect } from 'react';
import { FaComments, FaMoneyBillWave, FaHeart, FaPeace, FaUserCheck, FaBrain } from 'react-icons/fa'; // Importing the icons
import PostsList from '../components/PostsList';
import ExpertShowcase from '../components/ExpertShowcase'; // Import the ExpertShowcase component
import { Post } from '../data/postsData'; // Ensure this path is correct
import posts from '../data/postsData'; // Adjust the path if necessary

const HomePage: React.FC = () => {
  const phrases = [
    { text: "Find Your Way", icon: <FaComments className="text-blue-600 text-5xl" /> },
    { text: "Save Money", icon: <FaMoneyBillWave className="text-blue-600 text-5xl" /> },
    { text: "Find Peace", icon: <FaPeace className="text-blue-600 text-5xl" /> },
    { text: "Accept Yourself", icon: <FaUserCheck className="text-blue-600 text-5xl" /> },
    { text: "Improve Your Mind", icon: <FaBrain className="text-blue-600 text-5xl" /> }
  ]; // Phrases with icons

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility
  const [isClosing, setIsClosing] = useState(false); // Track closing state

  // Function to change the phrase every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [phrases.length]);

  // Automatically close popup after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true); // Trigger the fade-out and scaling animation
      setTimeout(() => {
        setShowPopup(false); // Remove the popup after the animation completes
      }, 1000); // This matches the transition duration (800ms)
    }, 1500); // Display the popup for 2.5 seconds before starting the animation

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="container mx-auto  bg-light-gray">
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-end justify-center bg-cover bg-center bg-no-repeat bg-[url('src/picture/screen.jpg')] z-50 transition-all duration-700 ease-in-out transform ${isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
        </div>
      )}

      {/* Hero Section */}
      <div className="rounded-lg m-3 p-3 shadow-lg mb-8 mt-4 text-center relative">
        <div className="text-left text-3xl mb-0 text-gray-800 ">Consultation with your expert online:</div>
        <div className="overflow-hidden h-12 relative mt-4">
          {phrases.map((phrase, index) => (
            <div key={index} className={`absolute text-lg text-blue-600 transition-transform duration-500 ${currentPhraseIndex === index ? 'transform translate-y-0' : '-translate-y-12'}`}>
              {phrase.text}
            </div>
          ))}
        </div>

        {/* Icons Section */}
        <div className="absolute bottom-4 right-4 p-3 flex flex-col items-center space-y-2">
          {phrases[currentPhraseIndex].icon}
        </div>
      </div>

      {/* Expert Showcase Section */}
      <div className="w-full mb-8 p-3">
        <ExpertShowcase /> {/* Add the Expert Showcase here */}
      </div>

      {/* Posts Section */}
      <h2 className="text-3xl p-3 font-semibold text-gray-800 mb-4">Latest Articles</h2>
      <div className=" gap-6 p-3"> {/* Responsive grid for posts */}
        <PostsList posts={posts as Post[]} /> {/* Ensure posts match the expected Post type */}
      </div>
    </div>
  );
};

export default HomePage;
