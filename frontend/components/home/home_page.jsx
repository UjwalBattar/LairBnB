import React from "react";
import ListingIndexContainer from "../listings/listing_index_container";

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
        <ListingIndexContainer />
      </main>
    );
  }
}

export default HomePage;
