import {
  RECEIVE_BOOKING_ERRORS,
  RECEIVE_ALL_BOOKINGS,
  RECEIVE_SINGLE_BOOKING,
  CLEAR_BOOKING_ERRORS
} from "../actions/booking_actions";

const bookingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_ALL_BOOKINGS:
      return [];
    case RECEIVE_SINGLE_BOOKING:
      return [];
    case CLEAR_BOOKING_ERRORS:
      return [];
    default:
      return state;
  }
};
