import CompletedTodos from "./CompletedTodos";
import InProgressTodos from "./InProgressTodos";
import Nav from "./Nav";
import Todo from "./Todo";
import TodoList from "./TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 w-full h-full">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/completed" element={<CompletedTodos />}></Route>
          <Route path="/in-progress" element={<InProgressTodos />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
