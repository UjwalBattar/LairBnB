import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const loginFooter = "Don't have an account?";
    const signupFooter = "Already have a LairBnB account?";
    const email = (
      <label>
        Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.update("email")}
          className="email-input"
          placeholder="Email address"
        />
      </label>
    );

    return (
      <div className={`${this.props.formType}-form-container`}>
        <form
          onSubmit={this.handleSubmit}
          className={`${this.props.formType}-from-box`}
        >
          Welcome to B!
          <br />
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          {this.renderErrors()}
          {this.props.formType}!
          <br />
          <br />
          <label>
            Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="username-input"
              placeholder="Username"
            />
          </label>
          <br />
          <br />
          {this.props.formType === "Signup" ? email : null}
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="password-input"
              placeholder="Password"
            />
          </label>
          <br />
          <br />
          <input
            className="session-submit"
            type="submit"
            value={this.props.formType}
          />
        </form>
        <br />
        <br />
        <div>
          {this.props.formType === "Signup" ? signupFooter : loginFooter}&nbsp;&nbsp;&nbsp;{
            this.props.navLink
          }
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);

// const dateOfBirth = (
//   <label>
//     Email:
//     <input
//       type="text"
//       value={this.state.email}
//       onChange={this.update("date_of_birth")}
//       className="email-input"
//     />
//   </label>
// );
