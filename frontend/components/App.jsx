import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import NavbarContainer from "./navbar/navbar_container";
import HomePageContainer from "./home/home_page_container";
import ListingIndexContainer from "./listings/listing_index_container";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";
import ListingShowContainer from "./listings/listing_show_container";
import NotFound from "./not_found";

const App = () => (
  <div>
    <header>
      <Modal />
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route
        exact
        path="/listings/:listingId"
        component={ListingShowContainer}
      />
      <Route path="/listings" component={ListingIndexContainer} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
