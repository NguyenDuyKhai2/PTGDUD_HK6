// src/components/FilterBar.jsx
import React, { useState } from 'react';

const FilterBar = ({ onSearch, onGenreChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Tìm kiếm theo tên sách..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-2 w-[250px]"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Tìm kiếm
      </button>

      {/* <select
        onChange={(e) => onGenreChange(e.target.value)}
        className="border p-2 w-[200px]"
      >
        <option value="">Tất cả thể loại</option>
        <option value="Văn học">Văn học</option>
        <option value="Khoa học">Khoa học</option>
        <option value="Công nghệ">Công nghệ</option>
        <option value="Tâm lý">Tâm lý</option>
      </select> */}
    </form>
  );
};

export default FilterBar;
