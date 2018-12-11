import { connect } from "react-redux";
// import {
//   fetchSearchResults,
//   clearSearchResults
// } from "../../actions/search_actions";

import SearchIndex from "./search_index";
// import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => ({
  searchResults: state.entities.searchResults
});

export default connect(mapStateToProps, null)(SearchIndex);
