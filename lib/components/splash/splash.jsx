import React from 'react';
import AppBar from 'material-ui/AppBar';
import Signup from './signup_form';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.openSignupModal = this.openSignupModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    openSignupModal() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <div className="main-container">
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
                                onClick={this.openSignupModal}
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
                <Dialog
                    title="Sign up with DoDate"
                    modal={true}
                    onRequestClose={this.handleClose}
                    // contentStyle={customContentStyle}
                    open={this.state.open}
                    style={{height: '50%'}}
                    titleStyle={{
                                paddingBottom: '1%',
                                fontSize: '120%' ,
                                position: 'absolute',
                                left: '31%'
                                }}
                >
                    <Signup
                        ownProps={this.props.ownProps}
                        autherrors={this.props.autherrors}
                        signup={this.props.signup}
                        handleClose={this.handleClose}
                        clearSessionErrors={this.props.clearSessionErrors}
                    />
                </Dialog>
            </div>
        );
    }
}