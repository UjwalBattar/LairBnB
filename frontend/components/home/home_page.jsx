import React from "react";
import ListingIndexContainer from "../listings/listing_index_container";
import SearchContainer from "../search/search_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <main className="home-page-container">
        {this.props.currentUser ? null : (
          <div className="home-splash-container">
            <div className="splash-search-container">
              <SearchContainer />
            </div>
          </div>
        )}
        <ListingIndexContainer />
      </main>
    );
  }
}

export default HomePage;

// <div className="categories-container">CATEGORIES</div>
<h1 className="splash-text">Up up and away to your next Super adventure!</h1>;
