import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <div className="text-center">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={'About'} description={''} />} />
          <Route path="/projects" element={<Projects title={'Projects'} description={''} />} />
          <Route path="/contact" element={<Contact title={'Contact'} description={''} />} />
        </Routes>
        <Footer />
      </div >
    </Router>
  );
};

export default App;