import React from "react";

import classes from "../css/notFoundPage.module.css";

function notFoundPage(props) {
  return (
    <div className={classes.text}>
      <b> 404-Page Not Found</b>
      <button
        className={classes.redirectButton}
        onClick={() => props.history.push("/home")}
      >
        Go To Homepage
      </button>
    </div>
  );
}

export default notFoundPage;
