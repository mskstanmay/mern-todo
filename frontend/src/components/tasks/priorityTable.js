import React from 'react';
import "../../css/Tasks.css";

const PriorityTable = ({ todos }) => {
  const priorityGroups = {
    High: todos.filter(todo => todo.priority >= 4),
    Medium: todos.filter(todo => todo.priority === 3),
    Low: todos.filter(todo => todo.priority <= 2),
  };

  const totalTasks = todos.length;

  const getPercentage = (group) => {
    return totalTasks ? ((group.length / totalTasks) * 100).toFixed(2) : 0;
  };

  return (
    <div className="priority-table">
      <h2>PRIORITY</h2>
      {Object.keys(priorityGroups).map((group) => (
        <div key={group} className="priority-row">
          <span className="priority-label">{group}</span>
          <span className="priority-percentage">{getPercentage(priorityGroups[group])}%</span>
          <div className="priority-bar-container">
            <div
              className={`priority-bar ${group.toLowerCase()}`}
              style={{ width: `${getPercentage(priorityGroups[group])}%` }}
            ></div>
          </div>
          <span className="priority-count">{priorityGroups[group].length}</span>
        </div>
      ))}
    </div>
  );
};

export default PriorityTable;
