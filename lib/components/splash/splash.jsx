import React from 'react';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default () => (
    <AppBar
        className="AppNavBar"
        title={<span>DoDate</span>}
        iconElementRight={
            <RaisedButton
                className="logout"
                label="Logout"
                secondary={true}
                // onClick={logout}
            />
        }
    />
    // <div className="splash-background">
    //     <h1>STuff</h1>
    //     <RaisedButton label="Default" primary={true} />
    // </div>
);