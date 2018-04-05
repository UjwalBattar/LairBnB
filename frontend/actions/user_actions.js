import * as APIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const requestAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers().then(users => {
    dispatch(receiveAllUsers(users));
  });
};
