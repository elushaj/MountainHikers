import classes from "./Navbar.module.css";
import React from "react";

function Navbar() {
  return (
    <div className={classes.navbar}>
      <div>
        <img alt="logo" src=".\assets\output-onlinepngtools.png"></img>
      </div>
      <div>
          <li></li>
          <li></li>
      </div>
    </div>
  );
}

export default Navbar;
