import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onDelete, onEdit }) => {
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
            <BookItem
              key={book.id}
              book={book}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;