import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const todos = useSelector((state) => state.todos.todos);
  const totalTodos = todos.length;
  const totalToDo = todos.filter((todo) => todo.status === "To do").length;
  const totalInProgress = todos.filter(
    (todo) => todo.status === "in progress"
  ).length;
  const totalCompleted = todos.filter(
    (todo) => todo.status === "completed"
  ).length;

  return (
    <div className="flex gap-2 p-2 bg-white rounded font-medium text-sm lg:flex lg:justify-between">
      <Link to="/">All tasks: {totalTodos}</Link>
      <Link to="/todo">To do: {totalToDo}</Link>
      <Link to="/in-progress">In progress: {totalInProgress}</Link>
      <Link to="/completed">Completed: {totalCompleted}</Link>
      <Link to="/add-todo"> + new task</Link>
    </div>
  );
};

export default Nav;
