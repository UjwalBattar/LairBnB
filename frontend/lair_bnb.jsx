// React
import React from "react";
import ReactDOM from "react-dom";
// Components
import Root from "./components/root";
import configureStore from "./store/store";
import { openModal, closeModal } from "./actions/modal_actions";

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
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
