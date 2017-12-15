import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const customContentStyle = {
  width: '70%',
  maxWidth: 'none',
};

export default class LoginDialog extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    open: false,
  };
  this.handleOpen = this.handleOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);

  }

  handleOpen () {
    console.log("trying to open")
    console.log(this)
    this.setState({ open: true });
  };

  handleClose () {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog With Custom Width" onClick={this.handleOpen} />
        <Dialog
          title="Dialog With Custom Width"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          open={this.state.open}
        >
          This is a test.
        </Dialog>
      </div>
    );
  }
}