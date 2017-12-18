import React from 'react';
import TextField from 'material-ui/TextField';
// import DialogActions from 'material-ui/Dialog'
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class Login extends React.Component {
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
    console.log(this.props.ownProps)
    this.props.login(this.state).then(
      this.props.ownProps.history.push('/homepage'))
      console.log("wtf").then(
      this.props.handleClose())
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
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
      <FlatButton
        className="login-modal-cancel-btn"
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />
    ];
    return (
      <div className="session-form">
        {/* <h2 className="loginmsg">Do Date</h2> */}
        <div
        className="login-text-fields">
        <TextField
          hintText="please enter the email address..."
          floatingLabelText="User Email"
          onChange={this.handleInput('email')} />

        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          onChange={this.handleInput('password')} 
        /><br />
        </div>
        {actions}
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

export default Login;