// src/redux/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Mảng todos ban đầu
const initialState = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Learn Redux', completed: false },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Thêm một todo mới
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    // Đánh dấu todo là hoàn thành
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Xoá một todo
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
