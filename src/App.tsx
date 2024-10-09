import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ExpertListingPage from './pages/ExpertListingPage';
import ExpertProfilePage from './pages/ExpertProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage';
import PostPage from './pages/PostPage'; 
import './index.css';
import 'antd/dist/reset.css'; 
import FitnessCoachPost from './pages/FitnessCoachPost';
import RelationshipCounselorPost from './pages/RelationshipCounselorPost';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow rounded-lg  ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/experts" element={<ExpertListingPage />} />
            <Route path="/experts/:category" element={<ExpertListingPage />} />
            <Route path="/expert/:id" element={<ExpertProfilePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/pages/fitness-coach" element={<FitnessCoachPost />} />
            <Route path="/pages/relationship-counselor" element={<RelationshipCounselorPost />} />
            <Route path="/posts/:id" element={<PostPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
