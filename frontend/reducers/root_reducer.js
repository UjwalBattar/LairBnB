import { combineReducers } from "redux";

import errors from "./errors_reducer";
import session from "./session_reducer";
import users from "./user_reducer";
import ui from "./ui_reducer";

const rootReducer = combineReducers({
  users,
  session,
  errors,
  ui
});

export default rootReducer;
