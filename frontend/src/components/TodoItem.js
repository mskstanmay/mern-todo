import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
        <button onClick={() => onDelete(todo._id)} style={{ marginLeft: '1em', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '0.5em 1em' }}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
