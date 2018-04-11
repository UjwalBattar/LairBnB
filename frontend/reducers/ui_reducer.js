import { combineReducers } from "redux";

import modal from "./modal_reducer";
import filter from "./filters_reducer";

export default combineReducers({
  modal,
  filter
});
