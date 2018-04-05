import React from "react";
import SignupFormContainer from "./session_form/signup_form_container";
import NavbarContainer from "./navbar/navbar_container";
const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <h1>Lair BnB B!</h1>
    <SignupFormContainer />
  </div>
);

export default App;
