import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Psychologists', 'Life Coaches', 'Career Mentors', 'Business Coaches', 'Financial Advisors'];

const CategoriesPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Browse by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/experts/${category.toLowerCase().replace(/\s+/g, '-')}`} // Correct dynamic route
            className="block p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100"
            aria-label={`Browse experts in ${category}`} // Accessibility enhancement
            title={`Browse experts in ${category}`} // SEO enhancement
          >
            <h2 className="text-xl font-semibold">{category}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
