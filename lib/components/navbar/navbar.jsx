import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog';
import DialogContent from 'material-ui/Dialog';
import TextField from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog'
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';



class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.openLoginModal = this.openLoginModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
        // this.toggleLoginModal = this.toggleLoginModal.bind(this);
        console.log(this.props);
        console.log("above is props in NavBar constructor");

        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleRequestClose

    // handleSubmit

    openLoginModal() {
      console.log("yo yo")
      this.setState({open: true})
      
    }
    // openLoginModal() {
    //     console.log("in openlogin modal");
    //     console.log(this.props);
    //     // this.render() (
    //     //     <LoginModal
    //     //     login={this.props.login}
    //     //     NavBarState={this.state}
    //     //     />
    //     // );
    // }

  handleClose() {
    this.setState({ open: false });
  };

    render() {
      console.log("navbar render")
        const { currentUser, logout, login } = this.props;
        const customContentStyle = {
          width: '50%',
          height: '60%',
          maxWidth: 'none',
        };
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
        const AppNavBar = currentUser ? (
            <AppBar
                className="AppNavBar"
                title={<span>DoDate</span>}
                iconElementRight={
                    <RaisedButton
                        className="logout-btn"
                        label="Logout"
                        secondary={true}
                        onClick={logout}
                    />
                }
            />
        ) : (
            <div>
            <AppBar
                className="AppNavBar"
                title={<span>DoDate</span>}
                iconElementRight={ // <Link to="/login">
                    <RaisedButton
                        className="logout-btn"
                        label="Log In"
                        secondary={true}
                        onClick={this.openLoginModal}
                  />
                // </Link> add links once routes are set
                }
            />
              <Dialog
                title="Login"
                actions={actions}
                modal={true}
                onRequestClose={this.handleClose}
                contentStyle={customContentStyle}
                open={this.state.open}
              >
                This is a test.
        </Dialog>

            </div>

        );
        return (
         
          AppNavBar

        // < Dialog open={this.state.openModal} onRequestClose = { this.handleClose } >
        //   <DialogTitle>{"Log In"}</DialogTitle>
        //   <form onSubmit={this.handleSubmit}>
        //     <DialogContent>
        //       <TextField hintText="EMAIL" fullWidth={true} />
        //     </DialogContent> 
        //     <DialogContent>
        //       <TextField hintText="PASSWORD" type="password" fullWidth={true} />
        //     </DialogContent>
        //     <DialogActions>
        //       <Button onClick={this.handleClose} primary>Disagree</Button>
        //       <Button onClick={this.handleClose} primary>Agree</Button>
        //     </DialogActions>
        //   </form>
        //     </Dialog >
        );
    }
}

export default NavBar;