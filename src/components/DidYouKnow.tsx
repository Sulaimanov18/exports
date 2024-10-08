import React from 'react';

interface DidYouKnowProps {
  fact: string; // Prop to receive the fact
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({ fact }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-6">
      <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
      <p className="text-gray-600">{fact}</p>
    </div>
  );
};

export default DidYouKnow;
