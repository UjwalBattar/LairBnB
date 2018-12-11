import React from "react";
import { withRouter } from "react-router-dom";

import ListingMap from "../map/map";
import ListingIndex from "../listings/listing_index";
import ListingIndexContainer from "../listings/listing_index_container";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ""
    };

    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  update(property) {
    return e => {
      this.setState({ [property]: e.target.value });
    };
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.searchQuery).then(() => {
      this.props.history.push({
        pathname: "/search"
      });
    });
    this.props.clearSearchResults();
    this.setState({ searchQuery: "" });
    // console.log(this.props);
  }

  clearSearch() {
    this.setState({ searchQuery: "" });
  }

  render() {
    let close;
    if (this.state.searchQuery.length > 0) {
      close = (
        <div className="closer" onClick={this.clearSearch}>
          x
        </div>
      );
    }

    return (
      <div className="search-container">
        <form onSubmit={this.handleSearch}>
          <input
            className="search-bar"
            placeholder="Anywhere &middot; Lairs"
            value={this.state.searchQuery}
            onChange={this.update("searchQuery")}
          />
        </form>
        {close}
      </div>
    );
  }
}
export default withRouter(SearchComponent);
