import * as APIUtil from "../util/booking_api_uitl";

export const RECEIVE_ALL_BOOKINGS = "RECEIVE_ALL_BOOKINGS";
export const RECEIVE_SINGLE_BOOKING = "RECEIVE_SINGLE_BOOKING";
export const REMOVE_BOOKING = "REMOVE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";

export const receiveAllBookings = bookings => ({
  type: RECEIVE_ALL_BOOKINGS,
  bookings
});

export const receiveSingleBooking = booking => ({
  type: RECEIVE_SINGLE_BOOKING,
  booking
});

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});

export const fetchAllBookings = data => dispatch =>
  APIUtil.fetchAllBookings(data).then(
    bookings => dispatch(receiveAllBookings(bookings)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON))
  );

export const fetchSingleBooking = id => dispatch =>
  APIUtil.fetchSingleBooking(id).then(
    booking => dispatch(receiveSingleBooking(booking)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON))
  );

export const createBooking = booking => dispatch =>
  APIUtil.createBooking(booking).then(
    formBooking => dispatch(receiveSingleBooking(formBooking)),
    errors => dispatch(receiveBookingErrors(errors.responseJSON))
  );

export const deleteBooking = id => dispatch =>
  APIUtil.deleteBooking(id).then(bookingId =>
    dispatch(removeBooking(bookingId))
  );
