import React from 'react';
import { Link } from 'react-router-dom';
import { HeartOutlined, BulbOutlined, MoneyCollectOutlined, RiseOutlined } from '@ant-design/icons'; // Import icons

// Import the post type if needed
import posts, { Post } from '../data/postsData'; // Adjust the path if necessary

const iconMap = {
  HeartOutlined: <HeartOutlined className="text-blue-500 text-2xl mr-2" />,
  BulbOutlined: <BulbOutlined className="text-blue-500 text-2xl mr-2" />,
  MoneyCollectOutlined: <MoneyCollectOutlined className="text-blue-500 text-2xl mr-2" />,
  RiseOutlined: <RiseOutlined className="text-blue-500 text-2xl mr-2" />,
};

const PostsList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
          <div className="flex items-center">
            {iconMap[post.icon]} {/* Render the icon dynamically */}
            <div className="flex items-center text-xl font-bold text-gray-800">{post.title}</div>
          </div>
          <p className="text-gray-600 mt-2">{post.content}</p>
          <Link to={`/posts/${post.id}`} className="text-blue-500 hover:underline mt-2 inline-block"> {/* Ensure the link matches the ID */}
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
