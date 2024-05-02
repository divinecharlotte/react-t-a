import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { handleAddTodo, handleRemoveTodo, handleEditTodo, handleChangeStatus } from './TodoFunctions'; 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const [text, setText] = useState('');

  return (
    <div>
      <h1>all taks</h1>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => handleRemoveTodo(todo.id, dispatch)}
            onEdit={() => handleEditTodo(todo.id, todo.text, dispatch)}
            onChangeStatus={() => handleChangeStatus(todo.id, todo.status, dispatch)}
          />
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        <button onClick={() => handleAddTodo(text, dispatch)}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
