import React, { useState } from "react";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState(3);
  const [tags, setTags] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      dueDate,
      priority,
      tags: tags.split(",").map((tag) => tag.trim()), 
      completed,
    };

    try {
      const response = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });

      if (response.ok) {
        const savedTodo = await response.json();
        console.log("Todo added:", savedTodo);
      } else {
        console.error("Failed to add todo");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>

      <div>
        <label>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div>
        <label>Priority [1-3]</label>
        <input
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          min="1"
          max="3"
          placeholder="Priority (1-3)"
        />
      </div>

      <div>
        <label>Tags</label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Enter comma-separated tags"
        />
      </div>

       <div>
        <label>Completed</label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </div> 

      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
