import React from 'react';
import AppBar from 'material-ui/AppBar';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default () => (
    <div className="main-container">
        {/* <AppBar
            className="AppNavBar"
            title={<span>DoDate</span>}
            iconElementRight={
                <RaisedButton
                    className="logout-btn"
                    label="Logout"
                    secondary={true}
                    // onClick={logout}
                />
            }
        /> */}
        {/* AppBar will be imported through its own container
        Only here now for testing frontend design */}
        <div className="splash-container">
            <div className="splash-transparent-background">
                <div className="splash-signup">
                    <div className="signup-text">
                        <h1>ALL OF YOUR DUE DATES IN ONE PLACE</h1>
                        <p>Designed by freelancers. Inspired by Kanban.</p>
                        <p>Envision your week with style and ease.</p>
                    </div>
                    <RaisedButton
                        className="signup-btn"
                        label="Signup"
                        secondary={true}
                        // onClick={logout}
                        />
                </div>
            </div>
        </div>
        <div className="splash-footer">
            <div className="gif-section">
                <div>gif1</div>
                <div>gif2</div>
                <div>gif3</div>
                <div>gif4</div>
            </div>
        </div>
        
    </div>
    // <div className="splash-background">
    //     <h1>STuff</h1>
    //     <RaisedButton label="Default" primary={true} />
    // </div>
);

// <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
//     <DialogTitle>{"Sign Up"}</DialogTitle>
//     <form onSubmit={this.handleSubmit}> 
//         <DialogContent>
//             <TextField hintText="EMAIL" fullWidth={true} />
//         </DialogContent>
//         <DialogContent>
//             <TextField type="password" hintText="PASSWORD" fullWidth={true} />
//         </DialogContent>
//         <DialogActions>
//             <Button onClick={this.handleRequestClose} primary>Disagree</Button>
//             <Button onClick={this.handleRequestClose} primary>Agree</Button>
//         </DialogActions>
//     </form>
// </Dialog>
