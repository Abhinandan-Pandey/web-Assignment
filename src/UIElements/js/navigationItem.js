import React from "react";

import classes from "../css/navigationItem.module.css";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <button className={classes.NavButton} onClick={props.action}>
      {props.children}
    </button>
  </li>
);

export default navigationItem;
