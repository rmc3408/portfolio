import React,{ useRef } from "react";
import classes from "./navbar.module.css";

const Navbar = ({toAbout,toProjects,toContact,toHome}) => {
    const arr = [classes.active, classes.list_item];
    const links = useRef();
  return <nav className={classes.main_nav}>
      <ul className={classes.nav_items}>
<<<<<<< HEAD
          <li className={arr.join(" ")}>Home </li>
=======
          <li className={arr.join(" ")} onClick={toHome}>Home</li>
>>>>>>> 4a35d4a5d276a44a8ac884a5c84f50ad2d337ef6
          <li className={classes.list_item} onClick={toAbout}>About</li>
          <li className={classes.list_item} onClick={toProjects}>Projects</li>
          <li className={classes.list_item} onClick={toContact}>Contact</li>
      </ul>
  </nav>
};

export default Navbar;
