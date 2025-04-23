// src/App.js
import React from 'react';
import './App.css'; // Import global styles
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        {/* Content goes here */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
