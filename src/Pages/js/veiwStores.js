import React from "react";
import { connect } from "react-redux";
import classes from "../css/viewStores.module.css";

const Stores = (props) => {
  return (
    <ul>
      {props.stores.map((store) => {
        return (
          <li className={classes.storesList} key={store.id}>
            Store Name : {store.store_name}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    stores: state.stores,
  };
};

export default connect(mapStateToProps)(Stores);
