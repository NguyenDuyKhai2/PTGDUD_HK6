import React, { useState } from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';
import FilterBar from './components/FilterBar';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Văn học", year: 1941 },
    { id: 2, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 },
    { id: 3, title: "Sapiens", author: "Yuval Harari", genre: "Khoa học", year: 2011 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleAddBook = (newBook) => {
    setBooks(prev => [...prev, newBook]);
  };

  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  // 🔍 Lọc kết hợp tên và thể loại
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGenre === '' || book.genre === selectedGenre)
  );

  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Quản lý Sách</h1>

      {/* Hiển thị tổng số sách */}
      <div className="mb-4 text-lg">
        Tổng số sách: <span className="font-bold">{books.length}</span>
      </div>

      <FilterBar onSearch={handleSearch} onGenreChange={handleGenreChange} />

      <AddBookForm onAdd={handleAddBook} />
      <BookList books={filteredBooks} onDelete={handleDeleteBook} />
    </div>
  );
}

export default App;