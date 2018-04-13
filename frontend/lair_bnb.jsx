// React
import React from "react";
import ReactDOM from "react-dom";
// Components
import Root from "./components/root";
import configureStore from "./store/store";
import { fetchAllListings } from "./actions/listing_actions";
import { createBooking } from "./actions/booking_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchAllListings = fetchAllListings;
  window.createBooking = createBooking;

  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
