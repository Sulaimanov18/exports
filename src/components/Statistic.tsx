const Statistic: React.FC = () => {

    return (
  
        <div className="statistics__list pl-6 grid grid-cols-2 w-full bg-white py-4">
        {/* Each statistic is a separate div */}
        <div className="bg-white text-left  shadow-l">
          <div className="text-2xl font-custom text-blue-500 items-center">610 </div>
          <div className="text-lg text-gray-700">Экспертов</div>
        </div>
      
        <div className="bg-white text-left ">
          <div className="text-2xl font-custom text-blue-500">1400</div>
          <p className="text-lg font-custom text-gray-700">Клиентов</p>
        </div>
      
        <div className="bg-white text-left ">
          <div className="text-2xl font-custom text-blue-500">5 Лет</div>
          <p className="text-lg font-custom text-gray-700">Средний Опыт</p>
        </div>
      
        <div className="bg-white text-left ">
          <div className="text-2xl font-custom text-blue-500">77%</div>
          <p className="text-lg font-custom text-gray-700">Ощущают результаты после нескольких сессий</p>
        </div>
      </div>
  
    );
  
  };

  export default Statistic;
  