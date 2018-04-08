import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedOutLinks = () => (
      <nav className="login-signup-links">
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
              LairBnB
            </a>
          </h1>
          <div className="search-container">
            <input
              className="searchPlaceholder"
              placeholder="Try &quot;App-Academy&quot;"
            />
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

// const personalGreeting = (currentUser, logout) => (
// 	<hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.username}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
// 	</hgroup>
// );<label className="search-container">

// <Link to="/login" onClick={logout}>
//   Log Out
// </Link>
