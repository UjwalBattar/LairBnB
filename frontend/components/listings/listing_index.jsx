import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "../map/map";

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllListings();
  }

  render() {
    const { listings } = this.props;
    let allListings = Object.values(listings).map(listing => {
      return <ListingIndexItem listing={listing} key={listing.id} />;
    });

    return (
      <div className="listing-index-wrapper">
        <h1 className="listing-index-header">Lairs around the world</h1>
        <div className="listing-index-container">
          {this.props.currentUser && this.props.pathname !== "/" ? (
            <aside className="listing-index-map-container">
              <ListingMap />
            </aside>
          ) : null}
          <div className="listing-index-content">{allListings}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(ListingIndex);
