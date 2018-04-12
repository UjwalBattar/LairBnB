import merge from "lodash/merge";

import {
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_SINGLE_BOOKING,
  REMOVE_BOOKING
} from "../actions/booking_actions";

const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BOOKINGS:
      return merge({}, state, action.bookings);
    case RECEIVE_SINGLE_BOOKING:
      return merge({}, state, { [action.booking.id]: action.booking });
    case REMOVE_BOOKING:
      let newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};
