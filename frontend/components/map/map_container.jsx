import { connect } from "react-redux";
import React from "react";
import ListingMap from "./map";
import { updateFilter } from "../../actions/filter_actions";
import { fetchSingleListing } from "../../actions/listing_actions";

const mapStateToProps = state => ({
  listings: state.entities.listings
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  fetchSingleListing: id => dispatch(fetchSingleListing(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingMap);
