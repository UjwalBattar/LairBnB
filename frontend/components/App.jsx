import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";

import Modal from "./modal/modal";
import NavbarContainer from "./navbar/navbar_container";
import HomePageContainer from "./home/home_page_container";
import ListingIndexContainer from "./listings/listing_index_container";
import ListingShowContainer from "./listings/listing_show_container";
import BookingIndexContainer from "./booking/booking_index_container";
import SearchContainer from "./search/search_container";

import FooterBar from "./footer_bar";
import NotFound from "./not_found";

import "react-dates/initialize";

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
      <Route path="/bookings" component={BookingIndexContainer} />
      <Route path="/listings" component={ListingIndexContainer} />
      // <Route path="/listings/?search=:query" component={SearchContainer} />
      <Route path="/*" component={NotFound} />
    </Switch>
    <footer>
      <FooterBar />
    </footer>
  </div>
);

export default App;
