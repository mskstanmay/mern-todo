import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("http://localhost:5000/api/todos");
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
