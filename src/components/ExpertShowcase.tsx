import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Импорт Link из react-router-dom

// Определение типа для эксперта
type Expert = {
  id: number;
  name: string;
  profession: string;
  imageUrl: string;
  story: string;
  link: string; // Ссылка для прочтения о посте
};

// Данные экспертов - Используются реальные изображения и ссылки
const experts: Expert[] = [
  {
    id: 1,
    name: 'Джон Доу',
    profession: 'Фитнес-тренер',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682435111671-dc6542c642e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'Джон изменил свою жизнь благодаря фитнесу и теперь помогает другим достигать их цели.',
    link: '/pages/fitness-coach', // Обновите ссылку на нужный маршрут
  },
  {
    id: 2,
    name: 'Джейн Смит',
    profession: 'Консультант по отношениям',
    imageUrl: 'https://images.unsplash.com/photo-1651690802122-0611d2734232?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    story: 'Джейн специализируется на помощи парам в преодолении трудностей и укреплении отношений.',
    link: '/pages/relationship-counselor', // Обновите ссылку на нужный маршрут
  },
  // Добавьте больше экспертов, если нужно
];

const ExpertShowcase: React.FC = () => {
  const [currentExpertIndex, setCurrentExpertIndex] = useState<number>(0);

  // Функция для смены эксперта
  const changeExpert = () => {
    const nextIndex = (currentExpertIndex + 1) % experts.length;
    setCurrentExpertIndex(nextIndex);
  };

  // Автоматическая смена эксперта каждые 10 секунд
  useEffect(() => {
    const interval = setInterval(changeExpert, 10000); // Смена каждые 10 секунд
    return () => clearInterval(interval); // Очистка при размонтировании
  }, [currentExpertIndex]);

  // Получение текущего эксперта на основе индекса
  const currentExpert = experts[currentExpertIndex];

  return (
    <div 
      className="relative flex flex-col items-center justify-center h-[400px] bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(${currentExpert.imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Темный наложенный слой для улучшения видимости текста */}
      <div className="relative z-10 text-center p-6">
        <h2 className="text-3xl font-bold">{currentExpert.name}</h2>
        <h3 className="text-xl italic mb-4">{currentExpert.profession}</h3>
        <p className="mb-4">{currentExpert.story}</p>
        <Link 
          to={currentExpert.link} // Используем Link для навигации
          className="bg-bright-green text-white py-2 px-4 rounded-lg shadow-md hover:bg-dark-green transition duration-200"
        >
          Читать дальше
        </Link>
      </div>
    </div>
  );
};

export default ExpertShowcase;
