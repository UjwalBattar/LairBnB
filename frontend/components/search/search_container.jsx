import { connect } from "react-redux";
import {
  fetchSearchResults,
  clearSearchResults
} from "../../actions/search_actions";

import SearchComponent from "./search";
// import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = state => ({
  results: state.entities.searchResults
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: query => dispatch(fetchSearchResults(query)),
  clearSearchResults: () => dispatch(clearSearchResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);

// const mapStateToProps = state => ({
//   listings: state.entities.listings
// });
//
// const mapDispatchToProps = dispatch => ({
//   updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Search);
