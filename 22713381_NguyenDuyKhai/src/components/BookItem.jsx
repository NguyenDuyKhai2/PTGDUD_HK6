import React from 'react';

const BookItem = ({ book, onDelete, onEdit }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{book.title}</td>
      <td className="border px-4 py-2">{book.author}</td>
      <td className="border px-4 py-2">{book.genre}</td>
      <td className="border px-4 py-2">{book.year}</td>
      <td className="border px-4 py-2">
        <button
          onClick={() => onEdit(book)}
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
        >
          Sửa
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Xoá
        </button>
      </td>
    </tr>
  );
};

export default BookItem;