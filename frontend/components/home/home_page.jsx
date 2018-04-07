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
        <div className="categories-container" />
        <div className="home-splash-container">HI</div>
      </main>
    );
  }
}

export default HomePage;
