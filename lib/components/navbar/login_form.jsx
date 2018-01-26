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
    this.handleCancel = this.handleCancel.bind(this);
    // this.handleGuest = this.handleGuest.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    this.props.login(this.state)
      .then(() => this.props.clearSessionErrors())
     
      // .then(() => this.props.clearSessionErrors())
  };

  handleCancel(e) {
    console.log("here is clearSessionErrors")
    // console.log(this.props.clearSessionErrors)
    // e.preventDefault(e);
    console.log(this.props)
    this.props.handleClose();
    this.props.clearSessionErrors();
  }

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
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        style={{position: 'absolute',
                right: '26%',
                bottom: '26%'
                }}
      />,
      <RaisedButton
        // className="login-modal-cancel-btn"
        label="Cancel"
        primary={true}
        onClick={this.handleCancel}
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '26%'
        }}
      />,
     
    ];
    return (
      <div className="session-form">
        {/* <h2 className="loginmsg">Do Date</h2> */}
        <div
        className="login-text-fields">
        <TextField
          hintText="Please enter an email address..."
          floatingLabelText="User Email"
          // errorText="This field is required"
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
        <ul className="session-report">
          {
            this.props.autherrors.map((error, idx) => (
              <li key={idx} className="session-errors">{error}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Login;