import PropTypes from "prop-types";
import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [text, setText] = useState("");
  
    const handleAddTodoClick = () => {
      if (text.trim()) {
        onAddTodo(text); // Call the onAddTodo function passed from the parent component
        setText(""); // Clear the input field after adding todo
      }}

  return (
    <div>
      <input className="p-2 m-4 rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
