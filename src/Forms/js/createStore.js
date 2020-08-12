import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "../css/createStore.module.css";
import ImageUpload from "../../UIElements/js/imageUpload";
import * as actions from "../../Store/actions/storeActions";

const CreateStore = (props) => {
  const [form, setForm] = useState({
    store_name: "",
    lat: "",
    long: "",
  });

  const inputChangeHandler = (e, identifier) => {
    setForm({
      ...form,
      [identifier]: e.target.value,
    });
  };

  const createStore = (e) => {
    e.preventDefault();
    const storeData = {
      id: props.id,
      store_image: props.store_image,
      store_name: form["store_name"],
      lat: form["lat"],
      long: form["long"],
    };
    console.log(storeData, "data");
    props.createStore(storeData);
  };

  const closeModalHandler = () => {
    props.closeModal();
  };

  return (
    <>
      <button className={classes.closeButton} onClick={closeModalHandler}>
        X
      </button>
      <form>
        <ImageUpload />
        <input
          placeholder="Store Name"
          value={form["store_name"]}
          onChange={(e) => {
            inputChangeHandler(e, "store_name");
          }}
        />
        <input
          placeholder="Store Latitude"
          value={form["lat"]}
          onChange={(e) => {
            inputChangeHandler(e, "lat");
          }}
        />
        <input
          placeholder="Store Longitude"
          value={form["long"]}
          onChange={(e) => {
            inputChangeHandler(e, "long");
          }}
        />
        <button onClick={createStore}>Submit</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    store_image: state.imageUrl,
    id: state.stores.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    storePicUrl: (imageUrl) => dispatch(actions.setImageUrl(imageUrl)),
    createStore: (storeDetails) => dispatch(actions.createStore(storeDetails)),
    closeModal: () => dispatch(actions.closeModel()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);
