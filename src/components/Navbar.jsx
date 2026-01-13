import React from "react";
import { Link } from "react-router-dom"; // For routing
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img 
          src="https://1ngo.in/media/mas/logo%20mas.png" 
          alt="MAS Logo" 
        />
      </div>

      {/* Middle: Search */}
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input" 
        />
        <button className="search-button">
          <img 
            src="https://img.icons8.com/ios-filled/24/000000/search.png" 
            alt="Search Icon" 
          />
        </button>
      </div>

      {/* Right: Menu */}
      <ul className="menu">
        <li>
          <Link to="/">
            <img src="https://img.icons8.com/ios-filled/20/000000/home.png" alt="Home Icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src="https://img.icons8.com/ios-filled/20/000000/info.png" alt="About Icon" />
            About Us
          </Link>
        </li>
        <li>
          <Link to="/programs">
            <img src="https://img.icons8.com/ios-filled/20/000000/program.png" alt="Programs Icon" />
            Programs
          </Link>
        </li>
        <li>
          <Link to="/events">
            <img src="https://img.icons8.com/ios-filled/20/000000/calendar.png" alt="Events Icon" />
            Events
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <img src="https://img.icons8.com/ios-filled/20/000000/news.png" alt="Blog Icon" />
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src="https://img.icons8.com/ios-filled/20/000000/contacts.png" alt="Contact Icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
