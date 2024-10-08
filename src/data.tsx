export type Post = {
    id: number;
    title: string;
    content: string;
    link: string; // The link to the specific post page
    icon: string; // Icon name for dynamic rendering
    imageUrl: string; // Image URL for each post
    additionalText: string; // Additional text for each post
  };
  
  const posts: Post[] = [
    {
      id: 1,
      title: "Understanding Mental Health",
      content: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act.",
      link: "/posts/understanding-mental-health",
      icon: "HeartOutlined",
      imageUrl: "https://images.unsplash.com/photo-1517252563420-14c504b16527", // Unsplash image URL
      additionalText: "Mental health is crucial for overall well-being. It impacts your ability to lead a fulfilling life, manage stress, and relate to others. Seeking help from a mental health professional can lead to significant improvements in your quality of life."
    },
    {
      id: 2,
      title: "Coping with Stress",
      content: "Understanding stress and learning effective coping strategies can improve mental health and overall well-being.",
      link: "/posts/coping-with-stress",
      icon: "BulbOutlined",
      imageUrl: "https://images.unsplash.com/photo-1527683319333-6a1348f99d9b", // Unsplash image URL
      additionalText: "Stress is a natural response to challenges in life. However, chronic stress can have serious health consequences. Techniques such as mindfulness, exercise, and therapy can help you manage stress effectively."
    },
    {
      id: 3,
      title: "The Benefits of Life Coaching",
      content: "Life coaching can provide the tools and support necessary to achieve personal and professional goals.",
      link: "/posts/benefits-of-life-coaching",
      icon: "RiseOutlined",
      imageUrl: "https://images.unsplash.com/photo-1573497019413-bd7c9130f015", // Unsplash image URL
      additionalText: "A life coach helps individuals identify their goals and create a plan to achieve them. They provide guidance, support, and accountability, which can be invaluable in navigating life's challenges."
    },
    {
      id: 4,
      title: "Managing Your Finances",
      content: "Financial advisors can provide insights into budgeting, investing, and planning for the future.",
      link: "/posts/managing-your-finances",
      icon: "MoneyCollectOutlined",
      imageUrl: "https://images.unsplash.com/photo-1556761172-7d5a251c3c8d", // Unsplash image URL
      additionalText: "Managing finances effectively is essential for achieving financial security and peace of mind. Financial advisors can help you develop strategies for saving, investing, and planning for retirement."
    },
  ];
  
  export default posts;
  