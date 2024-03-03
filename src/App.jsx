import { useEffect, useState } from 'react';
import { selectTodos, addTodo } from './components/todosSlice';
import { useSelector, useDispatch } from 'react-redux';
import { date } from './utils/getDate';

import TodoList from './components/TodoList';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoObject = {
      id: Math.floor(Math.random() * 99999),
      text: todo.toLowerCase(),
      completed: false,
    };
    dispatch(addTodo(todoObject));
    setTodo('');
  };

  return (
    <div className="container-800">
      <h1 className="app-name container-800">
        To-do <span className="date">[ {date} ]</span>
      </h1>
      <form onSubmit={handleSubmit} className="todo-form container-600">
        <label htmlFor="todo-text">To-do: </label>
        <input
          autoCapitalize="false"
          autoComplete="off"
          placeholder="end world hunger 💀"
          type="text"
          id="todo-text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
