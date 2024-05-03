import PropTypes from "prop-types";

const TodoItem = ({ todo, onRemove, onEdit, onChangeStatus }) => {
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => onRemove(todo.id)}>Delete</button>
      <button onClick={() => onEdit(todo.id, todo.text)}>Edit</button>
      <button onClick={() => onChangeStatus(todo.id, todo.status)}>
        Start
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
};

export default TodoItem;
