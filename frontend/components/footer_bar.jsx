import React from "react";
import { Link, withRouter } from "react-router-dom";

class FooterBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-container">
        <span className="footer-whitespace" />
        <div className="footer-links">
          <div className="site-links">
            <Link className="footer-home-link" to="/">
              Home
            </Link>
            <Link to="/listings">Lairs</Link>
          </div>
          <div className="my-links">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/ujwal-battar/"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FooterBar);
