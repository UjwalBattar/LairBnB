import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: "Login",
    navLink: <Link to="/signup">Sign up</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
