import { connect } from "react-redux";
import React from "react";
import ListingIndex from "./listing_index";
import { fetchAllListings } from "../../actions/listing_actions";

const mapStateToProps = ({ entities, session }) => {
  return {
    listings: entities.listings,
    searchResults: entities.searchResults,
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllListings: data => dispatch(fetchAllListings(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);
