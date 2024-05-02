import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import {  handleRemoveTodo, handleEditTodo, handleChangeStatus } from './TodoFunctions'; 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const completedTodos = todos.filter(todo => todo.status === 'completed');

  return (
    <div>
      <h1>completed todos</h1>
      <ul>
        {completedTodos.map(todo => (
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

export default TodoList;
