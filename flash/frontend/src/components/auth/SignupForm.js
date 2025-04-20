import React, { useState } from "react";
import "../../styles/Styles.css"; // Adjust the path as necessary

const SignupForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
    length: false,
  });

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Check password strength
    setStrength({
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      symbol: /[!@#$%^&*]/.test(value),
      length: value.length >= 8,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const data = {
      username,
      email,
      password,
    };

    // Send a POST request to the signup endpoint
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Signup successful!");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className="input-container">
      <h2>Sign Up</h2>
      <form id="signupform" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label">
            <span className="input-placeholder">Full Name</span>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="input-field"
              placeholder="Enter a fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label className="input-label">
            <span className="input-placeholder">Email</span>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="Enter an email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="input-group">
          <label className="input-label">
            <span className="input-placeholder">Username</span>
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="input-group password-container">
          <label htmlFor="password" className="password-label">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="password-input"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="toggle-eye" onClick={togglePasswordVisibility}>
            <i
              className={
                showPassword ? "fa-solid fa-eye" : "fa-regular fa-eye-slash"
              }
            ></i>
          </span>

          <div className="strength-indicators">
            <div
              className={`indicator lowercase ${
                strength.lowercase ? "active" : ""
              }`}
            ></div>
            <div
              className={`indicator uppercase ${
                strength.uppercase ? "active" : ""
              }`}
            ></div>
            <div
              className={`indicator number ${strength.number ? "active" : ""}`}
            ></div>
            <div
              className={`indicator symbol ${strength.symbol ? "active" : ""}`}
            ></div>
            <div
              className={`indicator length ${strength.length ? "active" : ""}`}
            ></div>
          </div>
        </div>

        <button className="custombtn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
