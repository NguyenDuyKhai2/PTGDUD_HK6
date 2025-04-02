import React from 'react';
import Navbar from '../components/Navbar';
import Contents from '../components/Contents';
const Home = () => {
  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="border-4 border-blue-400 col-span-1">
        <Navbar />
      </div>   
      <div className="border-4 border-red-400 col-span-3">
        <Contents/>
      </div>
    </div>
  );
}

export default Home;

