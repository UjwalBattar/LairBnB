import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import NavbarContainer from "./navbar/navbar_container";
import HomePageContainer from "./home/home_page_container";
import ListingIndexContainer from "./listings/listing_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";

const App = () => (
  <div>
    <header>
      <Modal />
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/listings" component={ListingIndexContainer} />
    </Switch>
  </div>
);

export default App;
