import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';

const Navbar = lazy(() => import('./Component/Navbar/Navbar.jsx'));
const Home = lazy(() => import('./Component/Pages/Home.jsx'));
const About = lazy(() => import('./Component/Pages/About.jsx'));
const Services = lazy(() => import('./Component/Pages/Service.jsx'));
const Resume = lazy(() => import('./Component/Pages/Resume.jsx'));
const PortfolioPage = lazy(() => import('./Component/Pages/Portfolio.jsx'));
const Blog = lazy(() => import('./Component/Pages/Blog.jsx'));
const Contact = lazy(() => import('./Component/Pages/Contact.jsx'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={null}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
