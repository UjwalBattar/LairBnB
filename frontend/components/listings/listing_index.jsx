import React from "react";
import { withRouter } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllListings();
  }

  render() {
    const { listings } = this.props;
    let allListings = Object.values(listings).map(listing => {
      return <ListingIndexItem listing={listing} key={listing.id} />;
    });

    return <div>{allListings}</div>;
  }
}

export default withRouter(ListingIndex);
