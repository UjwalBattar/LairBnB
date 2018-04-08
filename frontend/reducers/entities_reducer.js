import { combineReducers } from "redux";

import listingsReducer from "./listings_reducer";

const entitiesReducer = combineReducers({
  listings: listingsReducer
});

export default entitiesReducer;
