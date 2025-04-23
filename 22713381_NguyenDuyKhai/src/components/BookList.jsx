
import React from 'react';

const sampleBooks = [
  { id: 1, title: "Dế Mèn Phiêu Lưu Ký", author: "Tô Hoài", genre: "Văn học", year: 1941 },
  { id: 2, title: "Đắc Nhân Tâm", author: "Dale Carnegie", genre: "Tâm lý", year: 1936 },
  { id: 3, title: "Sapiens", author: "Yuval Noah Harari", genre: "Khoa học", year: 2011 }
];

const BookList = () => {
  return (
    <div className="p-4">
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
          {sampleBooks.map(book => (
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
