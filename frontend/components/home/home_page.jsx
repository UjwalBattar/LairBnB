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

// console.log(Array.from(this.props.users));
// if (this.props.users.length > 0) {
//   // debugger;
//   Object.keys(this.props.users).map(userId => {
//     console.log(this.props.users[userId]);
//     return <p>User: {this.props.users[userId]}</p>;
//     });
//   } else {