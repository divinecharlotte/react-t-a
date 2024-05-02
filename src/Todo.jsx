import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {  handleRemoveTodo, handleEditTodo, handleChangeStatus } from './TodoFunctions'; 

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const todo = todos.filter(todo => todo.status === 'To do');

  return (
    <div>
      <h1>todos</h1>
      <ul>
        {todo.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => handleRemoveTodo(todo.id, dispatch)}
            onEdit={() => handleEditTodo(todo.id, todo.text, dispatch)}
            onChangeStatus={() => handleChangeStatus(todo.id, todo.status, dispatch)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
