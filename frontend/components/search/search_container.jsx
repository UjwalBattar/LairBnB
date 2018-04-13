import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";

import Search from "./search";

const mapStateToProps = state => ({
  listings: state.entities.listings
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
