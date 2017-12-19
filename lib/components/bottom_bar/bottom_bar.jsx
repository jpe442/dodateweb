import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { BottomSheet } from 'material-ui-bottom-sheet';

class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.closeBottomBar = this.closeBottomBar.bind(this);
    }

    handleToggle() {
        console.log("toggling");
        this.setState({open: !this.state.open});
    }

    closeBottomBar() {
        this.setState({open: false});
    }

    render() {
        const saturday = {
            width: '50%',
        }

        const sunday = {
            width: '50%',
            right: 0,
        }

        const noFade = {
            width: 0,
        }


        const styles = {
            smallIcon: {
                width: 36,
                height: 36,
              },
            mediumIcon: {
              width: 48,
              height: 48,
            },
            small: {
                width: 72,
                height: 72,
                padding: 16,
              },
            medium: {
              width: 96,
              height: 96,
              padding: 24,
            },
        };
        
        return (
            <div 
            // className="bottom-bar"
            // onMouseOver={this.handleToggle}
            >
                {/* <div className="bottom-trigger"></div> */}
                <RaisedButton
                    className="weekend-button"
                    // iconStyle={{width: '72px', height: '72px', padding: '24px'}}
                    style={{position: "relative", marginBottom: '10%'}}
                    secondary={true}
                    label="Weekend"
                    onClick={this.handleToggle} 
                >
                </RaisedButton>
                <BottomSheet
                    // className="bottom-sheet"
                    docked={false}
                    // height={500}]
                    bodyStyle={saturday}
                    // onMouseOver={   }
                    open={this.state.open}
                    onRequestClose={() => this.handleToggle()}
                    onRequestChange={(open) => this.setState({open})} 
                >
                    <Subheader onClick={this.closeBottomBar}>Saturday</Subheader>
                    <MenuItem onClick={this.closeBottomBar}>Todo 1</MenuItem>
                    <MenuItem onClick={this.closeBottomBar}>Todo 2</MenuItem>

                </BottomSheet>
                <BottomSheet
                    // className="bottom-sheet"
                    docked={false}
                    // height={500}]
                    style={noFade}
                    bodyStyle={sunday}
                    open={this.state.open}
                    onRequestClose={() => this.handleToggle()}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <Subheader onClick={this.closeBottomBar}>Sunday</Subheader>
                    <MenuItem onClick={this.closeBottomBar}>Todo 1</MenuItem>
                    <MenuItem onClick={this.closeBottomBar}>Todo 2</MenuItem>

                </BottomSheet>
            </div>
        );
    }
}

export default BottomBar;