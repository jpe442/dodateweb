import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// class Login extends React.Component {
//     static muiName = 'FlatButton';

//     render() {
//         return (
//             <FlatButton {...this.props} label="Login" />
//         );
//     }
// }

// const Logged = (props) => (
//     <IconMenu
//         {...props}
//         iconButtonElement={
//             <IconButton><MoreVertIcon /></IconButton>
//         }
//         targetOrigin={{horizontal: 'right', vertical: 'top'}}
//         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//     >
//         <MenuItem primaryText="Sign out" />
//     </IconMenu>
// );

// Logged.muiName = 'IconMenu';

// class AppBarComposition extends React.Component {
//     state = {
//       logged: false,
//     };
  
//     handleChange = (event, logged) => {
//       this.setState({logged: logged});
//     };
  
//     render() {
//       return (
//         <div>
//           <AppBar
//             title="DoDate"
//             iconElementLeft={<IconButton><NavigationClose /></IconButton>}
//             iconElementRight={this.state.logged ? <Logged /> : <Login />}
//           />
//         </div>
//       );
//     }
//   }
  
// export default AppBarComposition;

export default ({ currentUser, login, logout }) => {
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
                />
            // </Link> add links once routes are set
            }
        />
    );

    return (
        AppNavBar
    );
};