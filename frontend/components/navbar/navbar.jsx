import React from "react";
import { Link } from "react-router-dom";
import SearchContainer from "../search/search_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guestUser = { username: "Spiderman", password: "password" };
    this.props.login(guestUser);
  }

  render() {
    const loggedOutLinks = () => (
      <nav className="login-signup-links">
        <a className="demo-link" onClick={e => this.handleGuestLogin(e)}>
          Demo
        </a>

        <a
          className="signup-link"
          onClick={() => this.props.openModal("signup")}
        >
          Sign Up
        </a>

        <a className="login-link" onClick={() => this.props.openModal("login")}>
          Log In
        </a>
      </nav>
    );

    const loggedInLinks = (currentUser, logout) => (
      <nav className="logout-links">
        <a className="logout-link" onClick={logout}>
          Log Out
        </a>
      </nav>
    );
    return (
      <header className="navbar">
        <div className="home-container">
          <h1 className="home-logo-link">
            <a className="home-link" href="/">
              Lair BnB
            </a>
          </h1>
          <div className="nav-search-container">
            {this.props.currentUser ? <SearchContainer /> : null}
          </div>
        </div>
        <div className="nav-bar-links">
          {this.props.currentUser
            ? loggedInLinks(this.props.currentUser, this.props.logout)
            : loggedOutLinks()}
        </div>
      </header>
    );
  }
}
export default Navbar;
