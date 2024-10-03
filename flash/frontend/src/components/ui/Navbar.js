import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <nav className="navbar">
      <img
        src="https://i.ibb.co/0BZfPq6/darklogo.png"
        alt="logo"
        className="logo"
      />
      <ul className="nav-list">
        <li className="nav-item">home</li>
        <li className="nav-item">features</li>
        <li className="nav-item">blogs</li>
        <li className="nav-item">shop</li>
      </ul>

      <div className="button-group">
        <button className="button">Sign in</button>
        <button className="button signup">Sign up</button>
        <CiMenuFries
          className="menu-icon"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside className={`sidebar ${mobileSidebarOpen ? "open" : "closed"}`}>
        <div className="search-container">
          <input className="search-input" placeholder="Search..." />
          <IoIosSearch className="search-icon" />
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
