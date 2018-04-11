import React from "react";

import ListingMap from "../map/map";
import ListingIndex from "../listings/listing_index";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // logic to change classname based on where it is being rendered
    return (
      <div className="search-container">
        <input
          className="search-placeholder"
          placeholder="Try &quot;App-Academy&quot;"
        />
      </div>
    );
  }
}
export default Search;
