import { connect } from "react-redux";
import React from "react";
import BookingForm from "./booking_form";

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, null)(BookingForm);
