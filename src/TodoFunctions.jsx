// todoFunctions.js
import { addTodo, removeTodo, updateTodo, updateTodoStatus } from './reducers'; // Update import statements

export const handleAddTodo = (text, setText, dispatch) => {
  if (text.trim()) {
    dispatch(addTodo({ text }));
    setText(''); // Clear the input field
  }
};

export const handleRemoveTodo = (id, dispatch) => {
  dispatch(removeTodo({ id }));
};

export const handleEditTodo = (id, text, dispatch) => {
  const newText = prompt('Enter new text', text);
  if (newText !== null && newText.trim() !== '') {
    dispatch(updateTodo({ id, text: newText }));
  }
};

export const handleChangeStatus = (id, currentStatus, dispatch) => {
  if (currentStatus === 'To do') {
    const newStatus = 'in progress';
    dispatch(updateTodoStatus({ id, status: newStatus }));
  }
  if (currentStatus === 'in progress') {
    const newStatus = 'completed';
    dispatch(updateTodoStatus({ id, status: newStatus }));
  }
};
