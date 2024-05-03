import AddTodo from "./AddTodo";
import CompletedTodos from "./CompletedTodos";
import InProgressTodos from "./InProgressTodos";
import Nav from "./Nav";
import Todo from "./Todo";
import TodoList from "./TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { addTodo } from "./reducers";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(addTodo({ text }));
  };
  return (
    <div className="bg-gray-100 w-full h-full p-6">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/completed" element={<CompletedTodos />}></Route>
          <Route path="/in-progress" element={<InProgressTodos />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route
            path="/add-todo"
            element={<AddTodo onAddTodo={handleAddTodo} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
