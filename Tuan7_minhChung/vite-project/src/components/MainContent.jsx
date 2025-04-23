import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

export default function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

