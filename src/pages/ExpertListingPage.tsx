import React, { useState } from 'react';
import { Input, Typography, Button } from 'antd';
import ExpertCard from '../components/ExpertCard';
import experts from '../expertsData';

const { Title } = Typography;

const EXPERTS_PER_PAGE = 5; // Number of experts per page

const ExpertListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Filter experts based on search term
  const filteredExperts = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredExperts.length / EXPERTS_PER_PAGE);

  // Get the current page experts
  const startIndex = (currentPage - 1) * EXPERTS_PER_PAGE;
  const currentExperts = filteredExperts.slice(startIndex, startIndex + EXPERTS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 min-h-screen " style={{ backgroundColor: '#F3F4F6' }}> {/* Background color changed to light gray */}
      <Title level={2} className="mb-4 text-center text-blue-600">Find a Therapist</Title>
      <Input
        placeholder="Search by name or profession"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-6 w-full max-w-md"
        style={{ borderColor: 'transparent' }} // Removing the border from the Input
      />
      <div className="flex flex-col items-center w-full">
        {currentExperts.map((expert, index) => (
          <div key={index} className="w-full max-w-3xl mb-4"> 
            <ExpertCard expert={expert} />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full max-w-md mt-6">
        <Button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          className="mx-2 text-lg" 
          style={{ width: '150px', backgroundColor: '#3B82F6', color: 'white' }}
        >
          Previous
        </Button>
        <Button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          className="mx-2 text-lg" 
          style={{ width: '150px', backgroundColor: '#3B82F6', color: 'white' }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ExpertListingPage;
