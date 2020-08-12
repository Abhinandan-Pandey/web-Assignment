import React from "react";

import NavigationItems from "./navigationItems";
import classes from "../css/sideDrawer.module.css";

const sideDrawer = (props) => {
  return (
    <>
      <div className={classes.SideDrawer}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
