import React from "react";

import Header from "../UIElements/js/header";
import Sidebar from "../UIElements/js/sideDrawer";
import Modal from "../UIElements/js/modal";

const layout = (props) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Header />
    <div style={{ display: "flex", marginTop: "60px" }}>
      <Sidebar />
      <Modal />
      {props.children}
    </div>
  </div>
);

export default layout;
