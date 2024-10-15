import React, { useState, useEffect } from 'react';
import { FaComments, FaMoneyBillWave, FaHeart, FaPeace, FaUserCheck, FaBrain } from 'react-icons/fa'; 
import PostsList from '../components/PostsList';
import ExpertShowcase from '../components/ExpertShowcase'; 
import { Post } from '../data/postsData'; 
import posts from '../data/postsData';
import HowWeSelectExperts from '../components/HowWeSelect';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Statistic from '../components/Statistic';


const HomePage: React.FC = () => {
  const phrases = [
    { text: "Открой новые горизонты", icon: <FaComments className="text-blue-600 text-5xl" /> },
    { text: "Достигни финансовой свободы", icon: <FaMoneyBillWave className="text-blue-600 text-5xl" /> },
    { text: "Найди своё предназначение", icon: <FaPeace className="text-blue-600 text-5xl" /> },
    { text: "Создай своё будущее", icon: <FaUserCheck className="text-blue-600 text-5xl" /> },
    { text: "Открой силу разума", icon: <FaBrain className="text-blue-600 text-5xl" /> }
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
      title: 'Образование',
      description: 'Мы проверяем дипломы: высшее психологическое, медицинское (психиатрия) и опыт работы',
    },
    {
      title: 'Опыт работы',
      description: 'Мы принимаем специалистов с подтвержденной практикой от трех лет',
    },
    {
      title: 'Рекомендации',
      description: 'Мы запрашиваем рекомендацию от руководителя, старших коллег или психологической ассоциации',
    },
    {
      title: 'Собеседование',
      description: 'Мы анализируем успешные кейсы и проверяем навыки на входном интервью',
    },
    {
      title: 'Этический кодекс',
      description: 'Мы проверяем, разделяет ли кандидат наши ценности. Профессиональный психолог не осуждает и не критикует',
    },
    {
      title: 'Обучение',
      description: 'Мы развиваем психологов через семинары и супервизию. Даже профессионалы нуждаются в обучении',
    },
  ];

  return (
    <div className="container mx-auto p-3 bg-light-gray font-custom"> {/* Applied custom font to the entire HomePage */}
      {showPopup && (
        <div
          className={`fixed inset-0 flex items-end justify-center bg-cover bg-center bg-no-repeat bg-[url('src/picture/screen.jpg')] z-50 transition-all duration-700 ease-in-out transform ${isClosing ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
        >
        </div>
      )}

      <div className="rounded-lg m-3  p-3 shadow-lg mb-6 mt-6 pt-4 text-center relative">
        <div className="text-left text-3xl mb-0 text-gray-800 ">Консультация с экспертом онлайн:</div>
        <div className="overflow-hidden h-12 relative mt-4"
        onClick={handleExploreClick}
        >
          {phrases.map((phrase, index) => (
            <div key={index} className={`absolute text-lg text-blue-600 transition-transform duration-500 ${currentPhraseIndex === index ? 'transform translate-y-0' : '-translate-y-12'}`}>
              {phrase.text}
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 p-2 flex flex-col items-center space-y-2">
          {phrases[currentPhraseIndex].icon}
        </div>
      </div>
      <div className="w-full p-2">
        <ExpertShowcase />
      </div>
      {/* Statistics Section */}
      <Statistic />

      <div className="bg-gray-300 w-full ">
        <HowWeSelectExperts steps={steps} expertImages={expertImages} />
      </div>

      <h2 className="text-3xl p-3 font-semibold text-gray-800 mb-4">Последние статьи</h2>
      <div className="gap-6 p-3"> 
        <PostsList posts={posts as Post[]} />
      </div>
    </div>
  );
};

export default HomePage;
