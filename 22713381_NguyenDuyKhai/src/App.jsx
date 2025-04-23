// src/App.jsx
import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Văn học", year: 1941 },
    { id: 2, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 }
  ]);

  const handleAddBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Quản lý Sách</h1>
      <AddBookForm onAdd={handleAddBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
