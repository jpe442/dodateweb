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
        // this.handleSubmit = this.handleSubmit.bind(this);

    }

    // handleRequestClose

    // handleSubmit

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
                        onClick={
                            <LoginModal
                                login={login}
                                state={this.state}
                            />
                        }
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