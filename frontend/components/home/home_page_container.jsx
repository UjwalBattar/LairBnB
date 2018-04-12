import React from "react";
import { connect } from "react-redux";
import HomePage from "./home_page";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
