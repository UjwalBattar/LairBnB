import { connect } from "react-redux";
import React from "react";
import ListingsIndex from "./listings_index";
import { fetchAllListings } from "../../actions/listing_actions";

const mapStateToProps = ({ entities }) => {
  return {
    listings: entities.listings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllListings: () => dispatch(fetchAllListings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);
