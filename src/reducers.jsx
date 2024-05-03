import { createSlice } from '@reduxjs/toolkit';
const savedTodos = JSON.parse(localStorage.getItem('todos'));

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: savedTodos || [] },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        status: "To do",
      };
      state.todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateTodoStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, removeTodo, updateTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;

