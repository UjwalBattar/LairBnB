import React from "react";
import { Link } from "react-router-dom";

// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//   }

const loggedOutLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;&nbsp;or&nbsp;&nbsp;
    <Link to="/signup">Signup</Link>
  </nav>
);

const loggedInLinks = () => (
  <nav className="logout">
    <Link to="/">Logout</Link>
  </nav>
);

const Navbar = ({ currentUser }) =>
  currentUser ? loggedInLinks() : loggedOutLinks();
// }
export default Navbar;
