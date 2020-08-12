import * as actionType from "./actionTypes";
import axios from "../../axios";

export const setImageUrl = (imageUrl) => {
  return {
    type: actionType.IMAGE_URL,
    imageUrl,
  };
};
export const openModel = (modalType) => {
  return { type: actionType.OPEN_MODAL, modalType, showModal: true };
};
export const closeModel = () => {
  return { type: actionType.CLOSE_MODAL, modalType: "", showModal: false };
};

export const setStores = (stores) => {
  return {
    type: actionType.STORE_LIST,
    stores,
  };
};
export const setOrders = (orders) => {
  return {
    type: actionType.ORDER_LIST,
    orders,
  };
};
export const updateStores = (storeData) => {
  return {
    type: actionType.UPDATE_STORE,
    storeData,
  };
};
export const updateOrders = (orderData) => {
  return {
    type: actionType.UPDATE_ORDER,
    orderData,
  };
};

export const createStore = (storeData) => {
  return (dispatch) => {
    axios
      .post("stores.json", storeData)
      .then((res) => {
        console.log(res.data, "resdata");
        let updateStoreData = {
          ...storeData,
          store_id: res.data.name,
        };
        console.log(updateStoreData, "storeupdate");
        dispatch(updateStores(updateStoreData));
        dispatch(closeModel());
      })
      .catch((err) => console.log(err));
  };
};
export const fetchStores = () => {
  return (dispatch) => {
    axios
      .get("stores.json")
      .then((res) => {
        const storeList = [];
        Object.keys(res.data).map((storeKey) => {
          return storeList.push({
            ...res.data[storeKey],
            store_id: storeKey,
          });
        });
        console.log(storeList, "storelist");
        dispatch(setStores(storeList));
      })
      .catch((err) => console.log(err));
  };
};

export const createOrder = (orderData) => {
  return (dispatch) => {
    axios
      .post("orders.json", orderData)
      .then((res) => {
        console.log(res.data, "resdata");
        console.log(Object.keys(res.data), "resdata");
        dispatch(updateOrders(orderData));
        dispatch(closeModel());
      })
      .catch((err) => console.log(err));
  };
};
export const fetchOrders = () => {
  return (dispatch) => {
    axios
      .get("orders.json")
      .then((res) => {
        const orderList = [];
        Object.keys(res.data).map((orderKey) => {
          return orderList.push({ ...res.data[orderKey] });
        });
        console.log(orderList, "orderlist");
        dispatch(setOrders(orderList));
      })
      .catch((err) => console.log(err));
  };
};
