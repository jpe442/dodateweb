import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ currentUser, logout }) => {
    const AppNavBar = currentUser ? (
        <AppBar
            title={<span>DoDate</span>}
            iconElementRight={
                <RaisedButton
                    label="Logout"
                    primary={true}
                    // onClick={logout}
                />
            }
        />
    ) : (
        <AppBar
            title={<span>DoDate</span>}
            iconElementRight={ // <Link to="/login">
                <RaisedButton
                    label="Log In"
                    primary={true}
                />
            // </Link> add links once routes are set
            }
        />
    );

    return (
        {AppNavBar}
    );
};