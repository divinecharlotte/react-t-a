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
    <div className="flex justify-center gap-4 ">
      <input className="p-8 rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button className="bg-white px-8  rounded-lg" onClick={handleAddTodoClick}>Add</button>
    </div>
  );
};

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodo;
