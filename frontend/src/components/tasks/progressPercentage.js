import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { progressPercentageOptions } from "../../assets/config/progressPercentageOptions";
import "../../css/Tasks.css";

const ProgressPercentage = ({ todos }) => {
  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  const percentage = totalTasks
    ? ((completedTasks / totalTasks) * 100).toFixed(2)
    : 0;

  const data = {
    // labels: ["Completed Tasks", "Remaining Tasks"],

    datasets: [
      {
        data: [completedTasks, totalTasks-completedTasks],
        backgroundColor: ["#dfccc7", "#efeee5"], // Green for completed, Yellow for remaining
        hoverBackgroundColor: ["#dfccc7", "#efeee5"], // Darker on hover
      },
    ],
  };
  return (
    
    <div className="chart-container">
      <Doughnut data={data} options={progressPercentageOptions} />
      <div className="percentage-label">{percentage}%</div>
    </div>
  );
};

export default ProgressPercentage;
