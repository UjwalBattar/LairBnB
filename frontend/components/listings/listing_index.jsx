import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import ListingMapContainer from "../map/map_container";

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listings: this.props.listings
    // };
  }

  componentDidMount() {
    this.props.fetchAllListings();
  }

  render() {
    let { listings } = this.props;
    if (listings === undefined) {
      this.props.fetchAllListings();
    }
    // debugger;
    let allListings = Object.values(listings).map(listing => {
      return <ListingIndexItem listing={listing} key={listing.id} />;
    });

    return (
      <div className="listing-index-wrapper">
        <h1 className="listing-index-header">Lairs around the world</h1>
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
  }
}

export default withRouter(ListingIndex);
