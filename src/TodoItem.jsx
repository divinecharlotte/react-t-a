import PropTypes from "prop-types";

const TodoItem = ({ todo, onRemove, onEdit, onChangeStatus }) => {
  let statusColorClass;
  let statusTextColorClass;
  
  switch (todo.status) {
    case 'To do':
      statusColorClass = 'bg-orange-100';
      statusTextColorClass = 'text-orange-600';
      break;
    case 'in progress':
      statusColorClass = 'bg-blue-100';
      statusTextColorClass = 'text-blue-600';
      break;
    case 'completed':
      statusColorClass = 'bg-green-100';
      statusTextColorClass = 'text-green-600';
      break;
    default:
      statusColorClass = 'bg-gray-600';
      statusTextColorClass = 'text-white';
  }

  return (
    <li className="bg-white flex flex-col gap-4 p-2 rounded-lg " key={todo.id}>
      <p className={`px-2 py-1 rounded-lg w-1/3 ${statusColorClass} ${statusTextColorClass}`}>{todo.status}</p>
      <h4 className=" font-semibold">{todo.text}</h4>
      <div className="flex gap-2">
        <button className="rounded-full text-red-600 bg-red-100 px-1 " onClick={() => onRemove(todo.id)}>D</button>
        <button className="rounded-full text-orange-600 bg-orange-100  px-1" onClick={() => onEdit(todo.id, todo.text)}>E</button>
        <button className="rounded-full text-green-600 bg-green-100 px-1" onClick={() => onChangeStatus(todo.id, todo.status)}>S</button>
      </div>
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
