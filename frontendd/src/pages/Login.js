import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/todolist-refresh.svg";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      console.log(response.data); // Handle successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <div className="screen-1">
      <div className="logo-container">
        <Logo className="logo-svg"></Logo>
      </div>
      <br></br>
      <div className="email">
        <label htmlFor="email">Email Address</label>
        <div className="sec-2">
          <ion-icon name="mail-outline"></ion-icon>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //placeholder="Username@gmail.com"
          />
        </div>
      </div>
      <br></br>
      <div className="password">
        <label htmlFor="password">Password</label>
        <div className="sec-2">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="············"
          />
          <ion-icon className="show-hide" name="eye-outline"></ion-icon>
        </div>
      </div>

      <button className="login" onClick={handleSubmit}>
        Login
      </button>

      <div className="footer">
        <span>Signup</span>
        <span>Forgot Password?</span>
      </div>
    </div>
  );
};

export default Login;
