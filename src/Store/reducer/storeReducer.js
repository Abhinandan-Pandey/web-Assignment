import * as actionType from "../actions/actionTypes";

const intialState = {
  showModal: false,
  modalType: "",
  imageUrl: "",
  stores: [],
  orders: [],
};

const setImageUrl = (state, action) => ({
  ...state,
  imageUrl: action.imageUrl,
});

const openModel = (state, action) => ({
  ...state,
  showModal: true,
  modalType: action.modalType,
});

const closeModal = (state, action) => ({
  ...state,
  showModal: false,
  modalType: "",
});

const setStores = (state, action) => ({
  ...state,
  stores: action.stores,
});

const setOrders = (state, action) => ({
  ...state,
  orders: action.orders,
});
const updateStores = (state, action) => {
  return { ...state, stores: state.stores.concat(action.storeData) };
};
const updateOrders = (state, action) => {
  return { ...state, orders: state.orders.concat(action.orderData) };
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.IMAGE_URL:
      return setImageUrl(state, action);
    case actionType.OPEN_MODAL:
      return openModel(state, action);
    case actionType.CLOSE_MODAL:
      return closeModal(state, action);
    case actionType.STORE_LIST:
      return setStores(state, action);
    case actionType.ORDER_LIST:
      return setOrders(state, action);
    case actionType.UPDATE_STORE:
      return updateStores(state, action);
    case actionType.UPDATE_ORDER:
      return updateOrders(state, action);
    default:
      return state;
  }
};

export default reducer;
