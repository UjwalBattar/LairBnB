import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import About from "./about";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = () => {
  return {
    formType: "about"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
