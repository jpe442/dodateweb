import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import LoginModal from './login_modal';
import RaisedButton from 'material-ui/RaisedButton';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            
        };
        this.openLoginModal = this.openLoginModal.bind(this);
        console.log(this.props);
        console.log("above is props in NavBar constructor");

        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleRequestClose

    // handleSubmit

    openLoginModal() {
        console.log("in openlogin modal");
        console.log(this.props);
        return (
            <LoginModal
            login={this.props.login}
            NavBarState={this.state}
            />
        );
    }

    render() {
        const { currentUser, logout, login } = this.props;
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
        );
        return (
            AppNavBar
        );
    }
}

export default NavBar;