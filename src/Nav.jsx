import { NavLink } from "react-router-dom";
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
<div className="p-4">
<div className="flex gap-2 p-2 bg-white  rounded-lg">
      <NavLink to="/" activeClassName="active-link">All tasks: {totalTodos}</NavLink>
      <NavLink to="/todo" activeClassName="active-link">To do: {totalToDo}</NavLink>
      <NavLink to="/in-progress" activeClassName="active-link">In progress: {totalInProgress}</NavLink>
      <NavLink to="/completed" activeClassName="active-link">Completed: {totalCompleted}</NavLink>
    </div>
</div>
  );
};

export default Nav;
