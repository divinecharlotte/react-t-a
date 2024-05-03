import PropTypes from "prop-types";
import { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [text, setText] = useState("");
  
    const handleAddTodoClick = () => {
      if (text.trim()) {
        onAddTodo(text); 
        setText(""); 
      }}

  return (
    <div className="lg:flex lg:justify-center">
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
