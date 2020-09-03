import React from "react";
import classes from "./navbar.module.css";

const Navbar = () => {
    const arr=[classes.active,classes.list_item]
  return <nav className={classes.main_nav}>
      <ul className={classes.nav_items}>
          <li className={arr.join(" ")}>Home</li>
          <li className={classes.list_item}>About</li>
          <li className={classes.list_item}>Projects</li>
          <li className={classes.list_item}>Contact</li>
      </ul>

  </nav>
};
export default Navbar;
