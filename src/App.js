import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import Navbar from './components/Navbar';
import News from './components/News';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import APOD from './components/APOD';
import Footer from './components/Footer';

function App() {
  return (
    // <Router> 
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
        <Route exact path="/apod" element={<APOD />} />
      </Routes>
      <Footer />
    </div>
    // </Router>
  );
}

export default App;
