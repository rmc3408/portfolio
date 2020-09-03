import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
  return <nav className={classes.main_nav}>
      <ul className={classes.nav_items}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
      </ul>


  </nav>
};
export default Navbar;
