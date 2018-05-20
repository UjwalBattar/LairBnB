import React from "react";

import ListingMap from "../map/map";
import ListingIndex from "../listings/listing_index";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };

    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.target.value }, this.handleSearch);
    };
  }

  handleSearch() {
    this.props.fetchSearchResults(this.state.searchQuery);
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-placeholder"
          placeholder="Anywhere &middot; Lairs"
        />
      </div>
    );
  }
}
export default SearchComponent;
