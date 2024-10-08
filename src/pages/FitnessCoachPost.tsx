import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const FitnessCoachPost: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Title level={2}>John Doe - Fitness Coach</Title>
      <img src="https://plus.unsplash.com/premium_photo-1682435111671-dc6542c642e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John Doe" className="rounded-lg mb-4" /> {/* Replace with actual image */}
      <Paragraph>
        John turned his life around through fitness and now helps others achieve their goals. He shares his journey, tips for staying motivated, and the importance of a balanced lifestyle.
      </Paragraph>
      <Paragraph>
        For more details, follow John's training programs, nutrition tips, and personal stories of transformation.
      </Paragraph>
    </div>
  );
};

export default FitnessCoachPost;
