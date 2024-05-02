import CompletedTodos from './CompletedTodos';
import InProgressTodos from './InProgressTodos';
import TodoList from './TodoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList/>}>    </Route>
          <Route path="/completed" element={<CompletedTodos/>}></Route>
          <Route path="/in-progress" element={<InProgressTodos/>}>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
