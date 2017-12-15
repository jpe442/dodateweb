import React from 'react';
import TextField from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog'
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleGuest = this.handleGuest.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.props.signup(this.state);
    this.props.handleClose()
    this.props.ownProps.history.push('/homepage')
    // .then(() => this.props.clearSessionErrors())
  };

  // handleGuest(e) {
  //   e.preventDefault(e);
  //   this.state = {
  //     username: "guest",
  //     password: "guestpassword"
  //   }
  //   this.props.login(this.state)
  //     .then(() => this.props.toggleLoginModal())
  //     .then(() => this.props.clearSessionErrors())
  //     .then(() => this.props.history.push('/homepage'));
  // };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div className="session-form">
        <h2 className="loginmsg">Do Date</h2>
        <form onSubmit={this.handleSubmit}>
          {actions}
          <label className="username-session">Username:
          <input
              className="username-input"
              type="text"
              onChange={this.handleInput('email')} /></label>

          <label className="password-login">Password:

          <input
              className="signup-password-input"
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')} />
          </label>
          {/* <div className="session-submit" onClick={this.handleSubmit}>Enter</div> */}
          {/* <div className="session-guest" onClick={this.handleGuest}>Guest</div> */}

        </form>
        {/* <ul className="session-report">
          {
            this.props.autherrors.map((error, idx) => (
              <li key={idx} className="session-errors">{error}
              </li>
            ))
          }
        </ul> */}
      </div>
    )
  }
}

export default Signup;