import { connect } from "react-redux";
import React from "react";
import BookingForm from "./booking_form";
import {
  createBooking,
  clearBookingErrors
} from "../../actions/booking_actions";

import { openModal } from "../../actions/modal_actions";

const mapStateToProps = ({ session, errors }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.bookingErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearBookingErrors: () => dispatch(clearBookingErrors()),
    createBooking: booking => dispatch(createBooking(booking)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
