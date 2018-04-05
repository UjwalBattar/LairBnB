import { combineReducers } from "redux";

import errors from "./errors_reducer";
import session from "./session_reducer";
import users from "./user_reducer";

const rootReducer = combineReducers({
  errors,
  session,
  users
});

export default rootReducer;
