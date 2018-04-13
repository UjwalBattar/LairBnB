import React from "react";

import ListingMap from "../map/map";
import ListingIndex from "../listings/listing_index";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-container">
        <input
          className="search-placeholder"
          placeholder="Search feature under construction"
        />
      </div>
    );
  }
}
export default Search;
