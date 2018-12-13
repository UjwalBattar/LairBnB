import React from "react";
import { Link, withRouter } from "react-router-dom";

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
        <Link className="listings-link" to="/listings">
          Lairs
        </Link>
        <Link className="trips-link" to="/bookings">
          Trips
        </Link>
        <a className="logout-link" onClick={logout}>
          Log Out
        </a>
        <span className="profile-pic-container">
          <img className="profile-pic" src={currentUser.image} />
        </span>
      </nav>
    );
    return (
      <header className="navbar">
        <div className="home-container">
          <h1 className="home-logo-link">
            <Link className="home-link" to="/">
              <img
                className="home-logo"
                src="https://static.trendme.net/temp/thumbs/580-480-3-90/webmaster-BurningletterL_Texts_full_2251_104053.png"
              />
            </Link>
          </h1>
          <div className="nav-search-container">
            {(this.props.location.pathname != "/" || this.props.currentUser) ? (
              <SearchContainer />
            ) : null}
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
export default withRouter(Navbar);
