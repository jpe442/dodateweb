import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    // state = {
    //   open: false,
    // };
    
    // handleOpen(e) => {
    //   this.setState({open: true});
    // };

    handleOpen() {
        return () => {
            this.setState({open: true});
        };
    }
  
    handleClose() {
        return () => {
            this.setState({open: false});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.props.NavBarState);
            // .then(() => this.props.history.push('/'));
    }

    render() {
        console.log("attempt open modal");
        return (
            <Dialog open={this.handleOpen} onRequestClose={this.handleClose}>
                <DialogTitle>{"Log In"}</DialogTitle>
                <form onSubmit={this.handleSubmit}> 
                    <DialogContent>
                        <TextField hintText="EMAIL" fullWidth={true} />
                    </DialogContent>
                    <DialogContent>
                        <TextField hintText="PASSWORD" type="password" fullWidth={true} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} primary>Disagree</Button>
                        <Button onClick={this.handleClose} primary>Agree</Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    //   const actions = [
    //     <FlatButton
    //       label="Ok"
    //       primary={true}
    //       keyboardFocused={true}
    //       onClick={this.handleClose}
    //     />,
    //   ];
  
    //   return (
    //     <div>
    //       <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} />
    //       <Dialog
    //         title="Dialog With Date Picker"
    //         actions={actions}
    //         modal={false}
    //         open={this.state.open}
    //         onRequestClose={this.handleClose}
    //       >
    //         Open a Date Picker dialog from within a dialog.
    //         <DatePicker hintText="Date Picker" />
    //       </Dialog>
    //     </div>
    //   );
    }
}

export default LoginModal;