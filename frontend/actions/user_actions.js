import * as APIUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveSingleUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers().then(users => {
    dispatch(receiveAllUsers(users));
  });
};

export const fetchSingleUser = id => dispatch => {
  return APIUtil.fetchSingleUser(id).then(user => {
    dispatch(receiveSingleUser(user));
  });
};
