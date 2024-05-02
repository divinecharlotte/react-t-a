import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { handleRemoveTodo, handleEditTodo, handleChangeStatus } from './TodoFunctions'; 

const InProgressTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const inProgressTodos = todos.filter(todo => todo.status === 'in progress');

  return (
    <div>
      <h1>in-progress todos</h1>
      <ul>
        {inProgressTodos.map(todo => (
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

export default InProgressTodos;
