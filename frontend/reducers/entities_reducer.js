import { combineReducers } from "redux";

import listings from "./listings_reducer";
import bookings from "./bookings_reducer";
import searchResults from "./search_reducer";

export default combineReducers({
  listings,
  bookings,
  searchResults
});
