// src/components/UserInfo.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/authSlice';

function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
      <h2 className="text-2xl font-bold mb-2">Xin chào, {user.name} 👋</h2>
      <button
        onClick={() => dispatch(logout())}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Đăng xuất
      </button>
    </div>
  );
}

export default UserInfo;
