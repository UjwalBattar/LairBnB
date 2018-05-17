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
          <div>
            <div className="home-splash-container">
              <h1 className="splash-text">Book unique lairs and have super experiences all over the world!
              <div className="splash-search-container">
                <SearchContainer />
              </div>
              </h1>
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
