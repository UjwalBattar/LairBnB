import merge from "lodash/merge";

import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER
} from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_SINGLE_USER:
      const newUser = { [action.user.id]: action.user };
      return merge({}, state, newUser);
    default:
      return state;
  }
};

export default userReducer;
