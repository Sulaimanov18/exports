import React, { useState, useEffect } from 'react';
import { FaComments, FaMoneyBillWave, FaHeart, FaPeace, FaUserCheck, FaBrain } from 'react-icons/fa'; 
import PostsList from '../components/PostsList';
import ExpertShowcase from '../components/ExpertShowcase'; 
import { Post } from '../data/postsData'; 
import posts from '../data/postsData';
import HowWeSelectExperts from '../components/HowWeSelect';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const HomePage: React.FC = () => {
  const phrases = [
    { text: "Find Your Way", icon: <FaComments className="text-blue-600 text-5xl" /> },
    { text: "Save Money", icon: <FaMoneyBillWave className="text-blue-600 text-5xl" /> },
    { text: "Find Peace", icon: <FaPeace className="text-blue-600 text-5xl" /> },
    { text: "Accept Yourself", icon: <FaUserCheck className="text-blue-600 text-5xl" /> },
    { text: "Improve Your Mind", icon: <FaBrain className="text-blue-600 text-5xl" /> }
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true); 
  const [isClosing, setIsClosing] = useState(false); 
  const expertImages = [
    'https://randomuser.me/api/portraits/men/1.jpg', // Unsplash image
    'https://randomuser.me/api/portraits/men/7.jpg',
    'https://randomuser.me/api/portraits/women/3.jpg',
    'https://randomuser.me/api/portraits/men/4.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval); 
  }, [phrases.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true); 
      setTimeout(() => {
        setShowPopup(false); 
      }, 1000); 
    }, 1500);

    return () => clearTimeout(timer); 
  }, []);


  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleExploreClick = () => {
    navigate('/categories'); // Navigate to the categories page
  };

  const steps = [
    {
      title: 'Education',
      description: 'We verify diplomas: higher psychological, medical (psychiatry), or retraining',
    },
    {
      title: 'Work Experience',
      description: 'We consider specialists with confirmed practice of three years',
    },
    {
      title: 'Recommendations',
      description: 'We ask for a recommendation from a supervisor, senior colleagues, or a psychological association',
    },
    {
      title: 'Interview',
      description: 'We analyze successful cases and check skills directly at the entrance interview',
    },
    {
      title: 'Ethical Code',
      description: 'We check if the candidate shares our values. A professional psychologist does not judge or criticize',
    },
    {
      title: 'Training',
      description: 'We develop psychologists through seminars and supervision. Even professionals need to learn',
    },
  ];

  return (
    <div className="container mx-auto bg-light-gray font-custom"> {/* Applied custom font to the entire HomePage */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-end justify-center bg-cover bg-center bg-no-repeat bg-[url('src/picture/screen.jpg')] z-50 transition-all duration-700 ease-in-out transform ${isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
        </div>
      )}

      <div className="rounded-lg m-3  p-3 shadow-lg mb-6 mt-6 pt-4 text-center relative">
        <div className="text-left text-3xl mb-0 text-gray-800 ">Consultation with your expert online:</div>
        <div className="overflow-hidden h-12 relative mt-4"
        onClick={handleExploreClick}
        >
          {phrases.map((phrase, index) => (
            <div key={index} className={`absolute text-lg text-blue-600 transition-transform duration-500 ${currentPhraseIndex === index ? 'transform translate-y-0' : '-translate-y-12'}`}>
              {phrase.text}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 p-3 flex flex-col items-center space-y-2">
          {phrases[currentPhraseIndex].icon}
        </div>
      </div>
      <div className="w-full  p-3">
        <ExpertShowcase />
      </div>
      {/* Statistics Section */}
      <div className="statistics__list pl-6 grid grid-cols-2 w-full bg-white py-4">
  {/* Each statistic is a separate div */}
  <div className="bg-white text-left  shadow-l">
    <div className="text-2xl font-custom text-blue-500 items-center">610 </div>
    <div className="text-lg text-gray-700">Experts</div>
  </div>

  <div className="bg-white text-left ">
    <div className="text-2xl font-custom text-blue-500">1400</div>
    <p className="text-lg font-custom text-gray-700">Clients</p>
  </div>

  <div className="bg-white text-left ">
    <div className="text-2xl font-custom text-blue-500">5 Years</div>
    <p className="text-lg font-custom text-gray-700">Average Experience</p>
  </div>

  <div className="bg-white text-left ">
    <div className="text-2xl font-custom text-blue-500">77%</div>
    <p className="text-lg font-custom text-gray-700">Feel Results After a Couple Sessions</p>
  </div>
</div>


      <div className="bg-gray-300 w-full">
        <HowWeSelectExperts steps={steps} expertImages={expertImages} />
      </div>

      <h2 className="text-3xl p-3 font-semibold text-gray-800 mb-4">Latest Articles</h2>
      <div className="gap-6 p-3"> 
        <PostsList posts={posts as Post[]} />
      </div>
    </div>
  );
};

export default HomePage;
