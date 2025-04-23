// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/authSlice';

function AuthForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(login({ name: username }));
      setUsername('');
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-96">
      <h2 className="text-2xl font-bold text-center mb-4">Đăng nhập</h2>
      <input
        type="text"
        placeholder="Tên đăng nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg focus:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Đăng nhập
      </button>
    </form>
  );
}

export default AuthForm;
