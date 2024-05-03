import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import CompletedTodos from "./CompletedTodos";
import InProgressTodos from "./InProgressTodos";
import Nav from "./Nav";
import Todo from "./Todo";
import TodoList from "./TodoList";

function App() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTodo = (text) => {
    dispatch(addTodo({ text }));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full h-full p-6 min-h-screen ${darkMode ? 'bg-gray-900 text-black' : 'bg-gray-100 text-black'}`}>
      <BrowserRouter>
        <Nav />
        <div className="mb-4">
          <button onClick={toggleDarkMode} className="bg-gray-800 text-white px-4 py-2 rounded">
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/completed" element={<CompletedTodos />} />
          <Route path="/in-progress" element={<InProgressTodos />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/add-todo" element={<AddTodo onAddTodo={handleAddTodo} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
