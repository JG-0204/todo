import { createSlice } from '@reduxjs/toolkit';

export const selectTodos = (state) => state.todos;

const initialState = [
  {
    id: 1,
    text: 'do something cool',
    completed: true,
  },
  {
    id: 2,
    text: 'do something cooler',
    completed: false,
  },
];
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    completeTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, completeTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
