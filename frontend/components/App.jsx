import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";

import Modal from "./modal/modal";
import NavbarContainer from "./navbar/navbar_container";
import HomePageContainer from "./home/home_page_container";
import { AuthRoute, ProtectedRoute } from "../util/route_api_util";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <h1>Lair BnB B!</h1>
    <header>
      <Modal />
      <NavbarContainer />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
