import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "../listings/listing_index_item";
import ListingMapContainer from "../map/map_container";

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listings = Object.values(this.props.searchResults);
    console.log("history", this.props.history);
    let allListings = listings.map(listing => {
      return <ListingIndexItem listing={listing} key={listing.id} />;
    });

    if (listings.length) {
      return (
        <div className="listing-index-wrapper">
          <h1 className="listing-index-header">These are the Lairs you requested:</h1>
          <div className="listing-index-container">
            {this.props.currentUser && this.props.pathname !== "/" ? (
              <aside className="listing-index-map-container">
                <ListingMapContainer />
              </aside>
            ) : null}
            <div className="listing-index-content">{allListings}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="listing-index-wrapper">
          <h1 className="listing-index-header">Sorry, there are no Lairs matching your search at this time.</h1>
          <div className="listing-index-container">
            <div className="listing-index-content">{allListings}</div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(SearchIndex);
