import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, updateTodo, updateTodoStatus } from './reducers'; 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo({ id }));
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setText(text);
  };

  const handleUpdateTodo = () => {
    if (text.trim()) {
      dispatch(updateTodo({ id: editId, text }));
      setText('');
      setEditId(null);
    }
  };

  const handleChangeStatus = (id, currentStatus) => {
    if(currentStatus === 'To do'){
      const newStatus = 'in progress' 
      dispatch(updateTodoStatus({ id, status: newStatus }));
      console.log(currentStatus);
    }
    if(currentStatus === 'in progress'){
      const newStatus = 'completed' 
      dispatch(updateTodoStatus({ id, status: newStatus }));
      console.log(currentStatus);
    }

  };

  return (
    <div>
      <h1>Todo List</h1>
      <p>all todos {todos.length}</p>
      <p>completed todos {todos.filter((ele)=>ele.status=== 'completed').length}</p>
      <p>in progres todos {todos.filter((ele)=>ele.status=== 'in progress').length}</p>
      <p>unstarted todos {todos.filter((ele)=>ele.status=== 'To do').length}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleChangeStatus(todo.id,todo.status)}>start</button>

          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a todo..."
        />
        {editId !== null ? (
          <button onClick={handleUpdateTodo}>Update Todo</button>
        ) : (
          <button onClick={handleAddTodo}>Add Todo</button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
