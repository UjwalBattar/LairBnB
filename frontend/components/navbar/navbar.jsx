import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedOutLinks = () => (
      <nav className="login-signup-links">
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;or&nbsp;&nbsp;
        <Link to="/signup">Signup</Link>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => (
      <nav className="logout-links">
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </nav>
    );
    return (
      <span className="nav-bar-links">
        {this.props.currentUser
          ? loggedInLinks(this.props.currentUser, this.props.logout)
          : loggedOutLinks()}
      </span>
    );
  }
}
export default Navbar;

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );

// <Link to="/login" onClick={logout}>
//   Log Out
// </Link>
