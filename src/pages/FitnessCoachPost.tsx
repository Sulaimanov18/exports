import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const FitnessCoachPost: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <Title level={2}>Джон Доу - Фитнес-тренер</Title>
      <img src="https://plus.unsplash.com/premium_photo-1682435111671-dc6542c642e7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="John Doe" className="rounded-lg mb-4" /> {/* Замените на фактическое изображение */}
      <Paragraph>
        Джон изменил свою жизнь благодаря фитнесу и теперь помогает другим достигать их целей. Он делится своей историей, советами по поддержанию мотивации и важностью сбалансированного образа жизни.
      </Paragraph>
      <Paragraph>
        Для получения дополнительной информации следите за тренировочными программами Джона, его советами по питанию и личными историями трансформации.
      </Paragraph>
    </div>
  );
};

export default FitnessCoachPost;
