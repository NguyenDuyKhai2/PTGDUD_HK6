import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] h-screen">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}