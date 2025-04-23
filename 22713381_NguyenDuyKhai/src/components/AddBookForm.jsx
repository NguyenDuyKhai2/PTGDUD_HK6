// src/components/AddBookForm.jsx
import React, { useState } from 'react';

const AddBookForm = ({ onAdd }) => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.genre && book.year) {
      onAdd({ ...book, id: Date.now() });
      setBook({ title: '', author: '', genre: '', year: '' });
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-4 mb-6">
      <input
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Tên sách"
        className="border p-2 w-[200px]"
      />
      <input
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Tác giả"
        className="border p-2 w-[180px]"
      />
      <input
        name="genre"
        value={book.genre}
        onChange={handleChange}
        placeholder="Thể loại"
        className="border p-2 w-[160px]"
      />
      <input
        name="year"
        value={book.year}
        onChange={handleChange}
        placeholder="Năm"
        type="number"
        className="border p-2 w-[100px]"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Thêm sách
      </button>
    </form>
  );
};

export default AddBookForm;
