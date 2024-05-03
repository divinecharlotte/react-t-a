import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoFunctions from "./TodoFunctions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const [text, setText] = useState("");

  const handleAddTodoClick = () => {
    TodoFunctions.handleAddTodo(text, setText, dispatch);
  };

  return (
    <div>
      <ul className="flex flex-col gap-5 py-5 bg-slate-100 lg:grid grid-cols-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => TodoFunctions.handleRemoveTodo(todo.id, dispatch)}
            onEdit={() =>
              TodoFunctions.handleEditTodo(todo.id, todo.text, dispatch)
            }
            onChangeStatus={() =>
              TodoFunctions.handleChangeStatus(todo.id, todo.status, dispatch)
            }
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
        <button onClick={handleAddTodoClick}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;
