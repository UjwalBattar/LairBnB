import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import NavbarContainer from "./navbar/navbar_container";
import HomePageContainer from "./home/home_page_container";

const App = () => (
  <div>
    <h1>Lair BnB B!</h1>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route path="/login" component={LoginFormContainer} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
