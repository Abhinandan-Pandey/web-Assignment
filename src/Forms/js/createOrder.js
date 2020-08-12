import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "../css/createOrder.module.css";
import * as actions from "../../Store/actions/storeActions";

const CreateOrder = (props) => {
  const [order, setOrder] = useState({
    order_amount: 0,
    store_id: "",
  });
  const inputChangeHandler = (e, identifier) => {
    setOrder({
      ...order,
      [identifier]: e.target.value,
    });
  };

  let order_number = props.orders.length;
  const createOrder = (e) => {
    e.preventDefault();

    const orderData = {
      id: props.orders.length,
      store_id: order["store_id"],
      order_number: props.orders.length,
      order_amount: order["order_amount"],
    };
    console.log(orderData, "data");
    props.createOrder(orderData);
  };

  const closeModalHandler = () => {
    props.closeModal();
  };
  let options = props.stores.map((store) => {
    // console.log(store, "store");
    return (
      <option value={store.store_id} key={store.store_id}>
        {store.store_name}
      </option>
    );
  });

  return (
    <>
      <button className={classes.closeButton} onClick={closeModalHandler}>
        X
      </button>
      <form>
        <select
          placeholder="store_id"
          value={order["store_id"]}
          onChange={(e) => {
            inputChangeHandler(e, "store_id");
          }}
        >
          <option>Select</option>
          {options}
        </select>
        <input
          placeholder="order_number"
          value={order_number}
          onChange={() => {}}
        />
        <input
          type="number"
          placeholder="order_amount"
          value={order["order_amount"]}
          onChange={(e) => {
            inputChangeHandler(e, "order_amount");
          }}
        />
        <button onClick={createOrder}>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    id: state.orders.length,
    orders: state.orders,
    stores: state.stores,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(actions.closeModel()),
    createOrder: (orderData) => dispatch(actions.createOrder(orderData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrder);
