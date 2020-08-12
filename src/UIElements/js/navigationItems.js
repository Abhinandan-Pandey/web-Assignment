import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import classes from "../css/navigationItems.module.css";
import NavigationItem from "./navigationItem";
import * as actions from "../../Store/actions/storeActions";

const navigationItems = (props) => {
  const createStoreHandler = () => {
    props.createStore();
  };
  const createOrderHandler = () => {
    props.createOrder();
  };
  const viewStoreHandler = () => {
    props.history.push("/view-stores");
  };
  const viewOrderHandler = () => {
    props.history.push("/view-orders");
  };

  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem action={createStoreHandler}>Create Store</NavigationItem>
      <NavigationItem action={viewStoreHandler}>Veiw Stores</NavigationItem>
      <NavigationItem action={createOrderHandler}>Create Order</NavigationItem>
      <NavigationItem action={viewOrderHandler}>Veiw Orders</NavigationItem>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createStore: () => dispatch(actions.openModel("createStore")),
    createOrder: () => dispatch(actions.openModel("createOrder")),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(navigationItems));
