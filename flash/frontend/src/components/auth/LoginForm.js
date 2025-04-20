import React, { useState } from "react";
import "../../styles/Styles.css"; // Adjust the path as necessary

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }

    alert("Login successful!"); // Placeholder for successful login
    // can add login logic here (e.g., API call)
  };

  return (
    <div className="input-container">
      <h2>Login</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="input-field"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="input-field"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            required
          />
        </div>
        <button className="custombtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
