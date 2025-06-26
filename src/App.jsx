import React from 'react';
import Navbar from './Component/Navbar/Navbar.jsx';
import { HashRouter as Router,  Routes, Route } from 'react-router-dom';
// main.jsx or App.jsx
import './style.css'; // ✅ Correct relative path

import Home from './Component/Pages/Home.jsx';
import About from './Component/Pages/About.jsx';
import Services from './Component/Pages/Service.jsx';
import Resume from './Component/Pages/Resume.jsx';
import Portfolio from './Component/Pages/Portfolio.jsx';
import Blog from './Component/Pages/Blog.jsx';
import Contact from './Component/Pages/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
