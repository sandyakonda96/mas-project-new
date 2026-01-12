import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo Image from URL */}
      <div className="logo">
        <img 
          src="https://1ngo.in/media/mas/logo%20mas.png" 
          alt="MAS Logo" 
        />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Programs</li>
        <li>Events</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
