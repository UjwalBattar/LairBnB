import { connect } from "react-redux";
import React from "react";

import ListingShow from "./listing_show";
import { fetchSingleListing } from "../../actions/listing_actions";

const mapStateToProps = ({ entities, users }, ownProps) => {
  return {
    listing: entities.listings[ownProps.match.params.listingId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleListing: listingId => dispatch(fetchSingleListing(listingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
