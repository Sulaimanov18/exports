import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/postsData'; // Adjust the path as necessary
import { HeartOutlined, BulbOutlined, RiseOutlined, MoneyCollectOutlined, InfoCircleOutlined } from '@ant-design/icons'; // Import icons
import { Modal } from 'antd'; // Import Ant Design modal

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the post ID from the URL
  const post = posts.find((p) => p.id.toString() === id); // Find the post by ID

  if (!post) {
    return <div>Post not found</div>; // Display message if post is not found
  }

  // State for managing the modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to show the modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Dynamic icon mapping
  const iconMap = {
    HeartOutlined: <HeartOutlined className="text-blue-500 text-3xl mr-2" />,
    BulbOutlined: <BulbOutlined className="text-blue-500 text-3xl mr-2" />,
    RiseOutlined: <RiseOutlined className="text-blue-500 text-3xl mr-2" />,
    MoneyCollectOutlined: <MoneyCollectOutlined className="text-blue-500 text-3xl mr-2" />,
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.content}</p>
      <div className="flex items-center mb-4">
        {iconMap[post.icon]}
        <button onClick={showModal} className="ml-2 text-blue-500 hover:underline">
          <InfoCircleOutlined className="text-blue-500 text-2xl" />
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <h2 className="text-xl font-semibold mb-2">Did You Know?</h2>
        <p className="text-gray-600">{post.additionalText}</p>
      </div>
      <Link to="/" className="text-blue-500 hover:underline mt-4 block">Back to Home</Link>

      {/* Modal for displaying the fact */}
      <Modal
        title="Fun Fact"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} // No footer for this modal
      >
        <p>Did you know that a significant portion of people spend money on unnecessary items, leading to financial stress? For instance, studies show that consumers often buy luxury items they don’t need, costing them thousands of dollars over their lifetimes. Mental health awareness is crucial to avoiding such pitfalls!</p>
      </Modal>
    </div>
  );
};

export default PostPage;
