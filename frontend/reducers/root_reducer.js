import { combineReducers } from "redux";

import entities from "./entities_reducer";
import errors from "./errors_reducer";
import session from "./session_reducer";
import users from "./user_reducer";
import ui from "./ui_reducer";

const rootReducer = combineReducers({
  entities,
  users,
  session,
  errors,
  ui
});

export default rootReducer;
