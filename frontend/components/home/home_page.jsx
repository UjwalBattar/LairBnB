import React from "react";
import { withRouter } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllUsers();
  }

  render() {
    return (
      <main>
        <div className="home-splash-container">HEYLO</div>
        <div className="categories-container">CATEGORIES</div>
      </main>
    );
  }
}

export default HomePage;
