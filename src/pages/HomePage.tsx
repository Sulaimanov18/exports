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

    // Function to change the phrase every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 3000);
      
      return () => clearInterval(interval); // Cleanup on unmount
    }, [phrases.length]);

    return (
      <div className="container mx-auto p-3 bg-light-gray">
        {/* Hero Section */}
        <div className="rounded-lg p-6 shadow-lg mb-8 text-center relative">
          <div className="text-left text-3xl mb-0 text-gray-800">Consultation with your expert online:</div>
          <div className="overflow-hidden h-12 relative mt-4">
            {phrases.map((phrase, index) => (
              <div key={index} className={`absolute text-lg text-blue-600 transition-transform duration-500 ${currentPhraseIndex === index ? 'transform translate-y-0' : '-translate-y-12'}`}>
                {phrase.text}
              </div>
            ))}
          </div>

          {/* Icons Section */}
          <div className="absolute bottom-4 right-4 flex flex-col items-center space-y-2">
            {phrases[currentPhraseIndex].icon}
          </div>
        </div>

        {/* Expert Showcase Section */}
        <div className="w-full mb-8">
          <ExpertShowcase /> {/* Add the Expert Showcase here */}
        </div>

        {/* Posts Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Responsive grid for posts */}
          <PostsList posts={posts as Post[]} /> {/* Ensure posts match the expected Post type */}
        </div>
      </div>
    );
  };

  export default HomePage;
