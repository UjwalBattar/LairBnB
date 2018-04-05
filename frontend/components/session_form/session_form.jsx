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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
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

    return (
      <div className={`${this.props.formType}-form-container`}>
        <form
          onSubmit={this.props.handleSubmit}
          className={`${this.props.formType}-from-box`}
        >
          {this.props.formType}!
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
          {this.props.formType === "Signup" ? email : null}
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
        </form>
      </div>
    );
  }
}

export default SessionForm;
