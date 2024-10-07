// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../css/Header.css";

const Header = () => {
  return (
    <header align="center">
      <nav>
      <Link to="/">
      <h1>TODO LIST App</h1>
      </Link>
        <Link to="/tasks">
          <button>View Tasks</button> {/* Button to navigate to tasks */}
        </Link>
        <Link to="/add">
          <button>Add Tasks</button> {/* Button to navigate to tasks */}
        </Link>
        <Link to="/login">
          <button>Login</button> {/* Button to navigate to login */}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
