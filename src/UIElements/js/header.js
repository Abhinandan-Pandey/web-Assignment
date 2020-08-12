import React from "react";
import { withRouter } from "react-router-dom";

import classes from "../css/header.module.css";

function header(props) {
  const clickHandler = () => {
    props.history.push("/");
  };

  return (
    <div className={classes.header}>
      <div className={classes.DrawerToggle} onClick={clickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Heading</h1>
    </div>
  );
}

export default withRouter(header);
