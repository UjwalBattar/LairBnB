import { connect } from "react-redux";
import React from "react";
import ListingMap from "./map";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => ({
  listings: state.entities.listings
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingMap);
