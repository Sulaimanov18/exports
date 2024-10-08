import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const RelationshipCounselorPost: React.FC = () => {
  return (
    <div className="container mx-auto p-3">
      <Title level={2}>Jane Smith - Relationship Counselor</Title>
      <img src="https://example.com/relationship-counselor.jpg" alt="Jane Smith" className="rounded-lg mb-4" /> {/* Replace with actual image */}
      <Paragraph>
        Jane specializes in helping couples navigate their challenges and build stronger relationships. She shares insights on effective communication, conflict resolution, and the importance of empathy in relationships.
      </Paragraph>
      <Paragraph>
        Discover Jane's approach to relationship counseling and how she has helped countless individuals find happiness and fulfillment in their partnerships.
      </Paragraph>
    </div>
  );
};

export default RelationshipCounselorPost;
