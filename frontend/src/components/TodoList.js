import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import ProgressPercentage from "./tasks/progressPercentage";
import PriorityTable from "./tasks/priorityTable";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/todos/1");
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Calculate total and completed tasks
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <ProgressPercentage todos={todos} />
      <PriorityTable todos={todos} />
      {/* TODO: NEED TO IMPLEMENT THE LOGIC TO DISPLAY THE TASKS HERE ! */}

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
