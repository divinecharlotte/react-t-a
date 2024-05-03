import { addTodo, removeTodo, updateTodo, updateTodoStatus } from "./reducers";

const TodoFunctions = {
  handleAddTodo: (text, setText, dispatch) => {
    if (text.trim()) {
      dispatch(addTodo({ text }));
      setText("");
    }
  },
  handleRemoveTodo: (id, dispatch) => {
    dispatch(removeTodo({ id }));
  },
  handleEditTodo: (id, text, dispatch) => {
    const newText = prompt("Enter new text", text);
    if (newText !== null && newText.trim() !== "") {
      dispatch(updateTodo({ id, text: newText }));
    }
  },
  handleChangeStatus: (id, currentStatus, dispatch) => {
    if (currentStatus === "To do") {
      const newStatus = "in progress";
      dispatch(updateTodoStatus({ id, status: newStatus }));
    }
    if (currentStatus === "in progress") {
      const newStatus = "completed";
      dispatch(updateTodoStatus({ id, status: newStatus }));
    }
  },
};

export default TodoFunctions;
