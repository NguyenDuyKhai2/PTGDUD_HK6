// src/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './components/redux/themeSlice';
import CounterToolkit from './components/CounterToolkit';
import TodoList from './components/TodoList';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AuthForm from './components/AuthForm';
import UserInfo from './components/UserInfo';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  React.useEffect(() => {
    document.body.className =
      theme === 'light' ? 'bg-gray-200 text-gray-900' : 'bg-gray-800 text-white';
  }, [theme]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center py-8 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
      }`}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Toggle Theme
        </button>
      </div>

      {/* ✅ Auth */}
      <div className="mb-8">
        {isLoggedIn ? <UserInfo /> : <AuthForm />}
      </div>

      {/* ✅ Counter App */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 mb-8">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">Counter App</h1>
        <CounterToolkit />
      </div>

      {/* ✅ To-Do List */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96 mb-8">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">To-Do List</h1>
        <TodoList />
      </div>

      {/* ✅ Product List */}
      <div className="w-full max-w-4xl mx-auto p-4 mb-8">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">Sản phẩm</h1>
        <ProductList />
      </div>

      {/* ✅ Giỏ hàng */}
      <div className="w-full max-w-4xl mx-auto p-4 mb-8">
        <h1 className="text-3xl font-semibold text-gray-700 mb-6">Giỏ hàng</h1>
        <Cart />
      </div>
    </div>
  );
}

export default App;
