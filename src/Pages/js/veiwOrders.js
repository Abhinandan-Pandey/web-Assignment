import React from "react";
import { connect } from "react-redux";
import classes from "../css/viewOrders.module.css";

const orders = (props) => {
  return (
    <ul>
      {props.orders.map((order) => {
        return (
          <li className={classes.ordersList} key={order.id}>
            Order Id : {order.id} Order Amount : {order.order_amount}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(orders);
