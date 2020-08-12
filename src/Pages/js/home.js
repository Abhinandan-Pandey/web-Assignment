import React from "react";
// import { connect } from "react-redux";

import classes from "../css/home.module.css";
import Map from "../../UIElements/js/map";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Map center={{ lng: 88.3425, lat: 22.5449 }} zoom={18} />
    </div>
  );
};

export default Home;
