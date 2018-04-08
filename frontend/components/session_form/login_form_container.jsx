import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login, clearErrors } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal("signup"))}>Sign up</button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
