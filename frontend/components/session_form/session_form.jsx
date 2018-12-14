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
          <li className={`error-${i}`} key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const loginFooter = "Don't have an account?";
    const signupFooter = "Already have a LairBnB account?";
    const email = (
      <div className="input-fields">
        <input
          type="text"
          value={this.state.email}
          onChange={this.update("email")}
          className="email-input"
          placeholder="Email address"
        />
      </div>
    );

    return (
      <div className="session-form">
        <div onClick={this.props.closeModal} className="close-x">
          &nbsp;X&nbsp;
        </div>
        <div className={`${this.props.formType}-form-container`}>
          <form
            onSubmit={this.handleSubmit}
            className={`${this.props.formType}-from-box`}
          >
            <p className="login-form-header">
              {this.props.formType === "login" ? "Log in to continue" : "Sign up to continue"}
            </p>
            <div className="session-errors">{this.renderErrors()}</div>
            <div className="input-fields">
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="username-input"
                placeholder="Username"
              />
            </div>

            {this.props.formType === "signup" ? email : null}
            <div className="input-fields">
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="password-input"
                placeholder="Password"
              />
            </div>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType === "signup" ? "Sign up" : "Log in"}
            />
          </form>
          <div className="session-form-footer">
            {this.props.formType === "signup" ? signupFooter : loginFooter}&nbsp;&nbsp;&nbsp;
            <div className="other-form-link">{this.props.otherForm}</div>
          </div>
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
