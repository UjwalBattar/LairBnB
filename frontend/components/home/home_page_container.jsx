import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";
import { requestAllUsers } from "../../actions/user_actions";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
