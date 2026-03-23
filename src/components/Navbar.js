import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Resume
      </NavLink>
      <NavLink to="/edit">Edit</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
