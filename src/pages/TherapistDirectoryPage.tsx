import React, { useState } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
// import TherapistCard from '../components/';
import SearchBar from '../components/SearchBar';
import experts from '../expertsData';

const { Title } = Typography;

const TherapistDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filter experts based on search term
  const filteredExperts = experts.filter(
    (expert) =>
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.specialties.some((specialty) =>
        specialty.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Layout>
      <Layout.Content style={{ padding: '24px' }}>
        <Title level={3}>Find a Therapist</Title>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Row gutter={16}>
          {filteredExperts.map((expert) => (
            <Col xs={24} sm={12} md={8} key={expert.id}>
              {/* <TherapistCard expert={expert} /> */}
            </Col>
          ))}
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default TherapistDirectoryPage;
