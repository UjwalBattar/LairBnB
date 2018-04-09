import { connect } from "react-redux";
import React from "react";

import ListingShow from "./listing_show";
import { fetchSingleListing } from "../../actions/listing_actions";

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    listing: entities.listings[ownProps.match.params.listingId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleListing: id => dispatch(fetchSingleListing(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
