import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Импорт значков для меню гамбургера

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения меню
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#477be4] shadow-md p-4 relative"> {/* Добавлена относительная позиция для навбара */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
          Платформа Экспертов
        </Link>

        {/* Иконка гамбургера для мобильной версии */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Ссылки для десктопа */}
        <div className="hidden md:flex space-x-4">
          <Link to="/categories" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Категории</Link>
          <Link to="/about" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">О нас</Link>
          <Link to="/contact" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Контакты</Link>
          <Link to="/signup" className="text-lg text-white hover:text-gray-200 transition-colors duration-300">Регистрация</Link>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="absolute right-0 top-full bg-white rounded-lg shadow-lg p-6 z-50 w-1/2"> {/* Позиционирование справа и ширина 50% */}
          <div className="flex flex-col items-center space-y-4">
            <Link to="/categories" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Категории</Link>
            <Link to="/about" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">О нас</Link>
            <Link to="/contact" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Контакты</Link>
            <Link to="/signup" onClick={toggleMenu} className="text-lg text-blue-600 hover:text-blue-800 transition-colors duration-300">Стать экспертом</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
