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
        <svg
          fill="rgba(0, 0, 255, 0.689)"
          width="300px"
          height="250px"
          viewBox="0 0 40 47"
        >
          <g>
            <g>
              <g>
                <path d="M6.12,38.52V5.136h26.962v28.037l5.137-4.243V2.568C38.219,1.15,37.07,0,35.652,0h-32.1C2.134,0,0.985,1.15,0.985,2.568     v38.519c0,1.418,1.149,2.568,2.567,2.568h22.408L22.33,38.52H6.12z" />
                <path d="M45.613,27.609c-0.473-0.446-1.2-0.467-1.698-0.057l-11.778,9.734l-7.849-4.709c-0.521-0.312-1.188-0.219-1.603,0.229     c-0.412,0.444-0.457,1.117-0.106,1.613l8.506,12.037c0.238,0.337,0.625,0.539,1.037,0.543c0.004,0,0.008,0,0.012,0     c0.408,0,0.793-0.193,1.035-0.525l12.6-17.173C46.149,28.78,46.084,28.055,45.613,27.609z" />
                <path d="M27.306,8.988H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568     S28.724,8.988,27.306,8.988z" />
                <path d="M27.306,16.691H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.149,2.566-2.568     C29.874,17.841,28.724,16.691,27.306,16.691z" />
                <path d="M27.306,24.395H11.897c-1.418,0-2.567,1.15-2.567,2.568s1.149,2.568,2.567,2.568h15.408c1.418,0,2.566-1.15,2.566-2.568     C29.874,25.545,28.724,24.395,27.306,24.395z" />
              </g>
            </g>
          </g>
        </svg>
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
