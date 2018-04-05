import merge from "lodash/merge";

import { RECEIVE_ALL_USERS } from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default userReducer;
