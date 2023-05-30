import React from "react";
import { NavLink } from "react-router-dom";

 function NavLinks() {
  return (
    <ul className="nav_links">
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about">
        <li>ABOUT</li>
      </NavLink>
      <NavLink to="/contact">
        <li>CONTACT</li>
      </NavLink>
    </ul>
  );
}

export default NavLinks;

