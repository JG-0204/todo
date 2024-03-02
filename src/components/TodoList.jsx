import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from './todosSlice';

import './TodoList.css';
import { useState } from 'react';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      dispatch(removeTodo(todo.id));
    }, 290);
  };

  return (
    <li className={!isRemoving ? 'todo slideInLeft' : 'todo slideOutLeft'}>
      <span
        onClick={() => dispatch(completeTodo(todo.id))}
        className={todo.completed ? 'todo-text completed' : 'todo-text'}
      >
        {todo.text}
      </span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

const TodoList = ({ todos }) => {
  if (todos.length === 0) {
    return <span className="no-todos fadeIn">You got no todos.</span>;
  }

  return (
    <div className="todos">
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
