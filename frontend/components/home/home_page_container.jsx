import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";
// import users from "../../reducers/user_reducer";
import { requestAllUsers } from "../../actions/user_actions";

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => {
  return {
    requestAllUsers: () => dispatch(requestAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
