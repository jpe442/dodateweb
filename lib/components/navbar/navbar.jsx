import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog';
import DialogContent from 'material-ui/Dialog';
import TextField from 'material-ui/Dialog';
import DialogActions from 'material-ui/Dialog';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Login from './login_form';
import TodoForm from '../tasks/create_task_form'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.openLoginModal = this.openLoginModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
 
        // this.toggleLoginModal = this.toggleLoginModal.bind(this);
        console.log(this.props);
        console.log("above is props in NavBar constructor");
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState(newProps.openTodoCreateModal)
    // }

    openLoginModal() {
      console.log("yo yo");
      this.setState({open: true});
      
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
  }

    render() {
      console.log("navbar render");
        const { currentUser, logout, login} = this.props;
        // const modalBtnsStyle = {
        //   display: 'flex',
        //   position: 'absolute',
        //   bottom: '5%'
        // }

        const AppNavBar = currentUser ? (
            <div className="nav-base">
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
            <Dialog
                title="Create New Todo"
                modal={false}
                overlayStyle={{display: 'none'}}
                style={{
                    width: '100%',
                    height: '100%',
                    zIndex: 1500,
                    // display: 'flex',
                    // justifyContents: 'center'
                }}

                bodyStyle={{
                    height: '100%'
                }}

                titleStyle={{
                    paddingTop: '3%',
                    padding: '1%',
                    fontSize: '80%',
                    position: 'relative',
                    left: '10%',
                    top: '20%'
                }}
                onRequestClose={this.props.toggleTodoCreateModal}
                open={this.props.openTodoCreateModal}
            >
            <TodoForm
                ownProps = {this.props.ownProps}
                currentUser={this.props.currentUser}
                createTodo={this.props.createTodo}
                toggleTodoCreateModal={this.props.toggleTodoCreateModal}
            />
            </Dialog>
            </div>
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
                    title="Login to DoDate"
                    // bodyClassName="login-dialog"
                    // style={sessionFade}
                    // actions={actions}
                    modal={true}
                    // actionsContainerStyle={modalBtnsStyle}                
                    onRequestClose={this.handleClose}
                    // contentStyle={customContentStyle}
                    open={this.state.open}
                    style={{height: '50%'}}
                    titleStyle={{
                        paddingBottom: '1%',
                        fontSize: '120%',
                        position: 'absolute',
                        left: '35%',
                        top: '7%'
                
                    }}
                >
                    <Login 
                    ownProps={this.props.ownProps}
                    autherrors={this.props.autherrors}
                    login={login}
                    handleClose={this.handleClose}
                    clearSessionErrors={this.props.clearSessionErrors}
                    />
                    
                </Dialog>
               
            </div>
        );
        return (
          AppNavBar
        );
    }
}

export default NavBar;