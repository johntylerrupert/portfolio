import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="text-center">
        <Header />
      </div>
      <Home />
      <Footer />
    </div>
  );
};

export default App;