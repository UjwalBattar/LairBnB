import { connect } from "react-redux";

import Search from "./search";

const mapStateToProps = ({ entities }) => ({
  listings: entities.listings
});

const mapDispatchToProps = dispatch => ({
  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
