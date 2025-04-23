import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/authSlice';
import cartReducer from './redux/cartSlice';
import themeReducer from './redux/themeSlice';
import counterReducer from './redux/counterSlice';
import todosReducer from './redux/todosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    theme: themeReducer,
    counter: counterReducer,
    todos: todosReducer,
  },
});
