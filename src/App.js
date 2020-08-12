import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./Hoc/layout";
import Home from "./Pages/js/home";
import Orders from "./Pages/js/veiwOrders";
import Stores from "./Pages/js/veiwStores";
import NotFoundPage from "./Pages/js/notFoundPage";
import { fetchStores, fetchOrders } from "./Store/actions/storeActions";

function App(props) {
  const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/view-orders" component={Orders} />
      <Route exact path="/view-stores" component={Stores} />
      <Route component={NotFoundPage} />
    </Switch>
  );

  const { fetchStores, fetchOrders } = props;

  useEffect(() => {
    fetchStores();
    fetchOrders();
  }, [fetchStores, fetchOrders]);

  return (
    <>
      <Layout>{routes}</Layout>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStores: () => dispatch(fetchStores()),
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

export default connect(null, mapDispatchToProps)(App);
