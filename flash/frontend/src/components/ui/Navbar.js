import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries, CiCircleRemove } from "react-icons/ci";
import "./Navbar.css";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle sidebar
  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Dispatch search event for App.js to handle
    document.dispatchEvent(new CustomEvent("searchFlashcards", { detail: e.target.value }));
  };

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link to="/" onClick={handleLinkClick}>
        <div className="logo">ZLU</div> {/* Placeholder for "ZLU" logo */}
      </Link>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={handleLinkClick}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/cards"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={handleLinkClick}
          >
            CardsList
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
        </li>
      </ul>

      <div className="button-group">
        <Link to="/login">
          <button className="button" onClick={handleLinkClick}>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="button signup" onClick={handleLinkClick}>
            Sign up
          </button>
        </Link>
        <CiMenuFries
          className="menu-icon"
          onClick={toggleSidebar}
          aria-label="Toggle mobile menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleSidebar()}
        />
      </div>

      <aside
        className={`sidebar ${mobileSidebarOpen ? "open" : "closed"}`}
        aria-hidden={!mobileSidebarOpen}
      >
        <div className="sidebar-header">
          <CiCircleRemove
            className="close-icon"
            onClick={toggleSidebar}
            aria-label="Close mobile menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleSidebar()}
          />
        </div>
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Search flashcards..."
            value={searchQuery}
            onChange={handleSearch}
            aria-label="Search flashcards"
          />
          <IoIosSearch className="search-icon" aria-hidden="true" />
        </div>
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink
              to="/cards"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              CardsList
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Login
            </NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleLinkClick}
            >
              Sign up
            </NavLink>
          </li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;