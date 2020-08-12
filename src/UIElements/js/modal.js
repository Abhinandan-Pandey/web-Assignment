import React from "react";
import { connect } from "react-redux";

import classes from "../css/modal.module.css";
import CreateStore from "../../Forms/js/createStore";
import CreateOrder from "../../Forms/js/createOrder";

const modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.type === "createStore" ? <CreateStore /> : <CreateOrder />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.modalType,
    show: state.showModal,
  };
};

export default connect(mapStateToProps)(modal);
