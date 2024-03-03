import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from './todosSlice';
import { useState } from 'react';

import './TodoList.css';

import taskCompleteLogo from '../assets/task-complete.svg';

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
  const noTodosText =
    "No to-dos in sight! 🎉 Chill out and enjoy the moment – you've got nothing on your plate right now! Unless you want to add one.";

  const todosCompletedText =
    "おめでとう (Congratulations)! 🎉 You rocked your to-do list today! Give yourself a pat on the back and go do something fun – you've totally earned it! 🚀";

  if (todos.length === 0) {
    return <p className="no-todos fadeIn">{noTodosText}</p>;
  }

  const isTodosCompleted = todos.every((todos) => todos.completed === true);

  if (isTodosCompleted) {
    return (
      <div className="todos-completed container-600">
        <img src={taskCompleteLogo} alt="all task complete" />
        <p>{todosCompletedText}</p>
      </div>
    );
  }

  return (
    <div className="todos container-600">
      <ul>
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
