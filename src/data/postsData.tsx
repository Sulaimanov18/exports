export type Post = {
  id: number;
  title: string;
  content: string; // Main content of the post
  additionalText: string; // Additional text for each post
  icon: 'HeartOutlined' | 'BulbOutlined' | 'RiseOutlined' | 'MoneyCollectOutlined'; // Restrict icon values
  imageUrl?: string; // Optional image URL
};

const posts: Post[] = [
  {
    id: 1,
    title: "Understanding Mental Health",
    content: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.",
    additionalText: "Mental health is crucial for overall well-being. It impacts your ability to lead a fulfilling life, manage stress, and relate to others.",
    icon: "HeartOutlined",
    imageUrl : "https://images.unsplash.com/photo-1517252563420-14c504b16527",
  },
  {
    id: 2,
    title: "Coping with Stress",
    content: "Understanding stress and learning effective coping strategies can improve mental health and overall well-being.",
    additionalText: "Stress is a natural response to challenges in life. However, chronic stress can have serious health consequences.",
    icon: "BulbOutlined",
  },
  {
    id: 3,
    title: "The Benefits of Life Coaching",
    content: "Life coaching can provide the tools and support necessary to achieve personal and professional goals.",
    additionalText: "A life coach helps individuals identify their goals and create a plan to achieve them.",
    icon: "RiseOutlined",
  },
  {
    id: 4,
    title: "Managing Your Finances",
    content: "Financial advisors can provide insights into budgeting, investing, and planning for the future.",
    additionalText: "Managing finances effectively is essential for achieving financial security and peace of mind.",
    icon: "MoneyCollectOutlined",
  },
];

export default posts;
