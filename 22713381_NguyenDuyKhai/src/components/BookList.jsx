// src/components/BookList.jsx
import React from 'react';

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Danh sách sách</h2>
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Tên sách</th>
            <th className="border px-4 py-2">Tác giả</th>
            <th className="border px-4 py-2">Thể loại</th>
            <th className="border px-4 py-2">Năm</th>
            <th className="border px-4 py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.genre}</td>
              <td className="border px-4 py-2">{book.year}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-2 py-1 rounded">Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
