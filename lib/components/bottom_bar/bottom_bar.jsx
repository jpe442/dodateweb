import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
            <div>
                <IconButton
                    // className="material-icons"
                    // iconStyle={{width: '72px', height: '72px', padding: '24px'}}
                    // style={{width: '36px', height: '36px'}}
                    iconClassName="material-icons"
                    tooltip="Weekend Bottom Bar"
                    onClick={this.handleToggle} 
                >
                    cloud_circle
                </IconButton>
                <BottomSheet
                    docked={false}
                    height={400}
                    open={this.state.open}
                    onRequestClose={() => this.handleToggle()}
                    onRequestChange={(open) => this.setState({open})} 
                >
                    <MenuItem onClick={this.closeBottomBar}>Menu Item</MenuItem>
                    <MenuItem onClick={this.closeBottomBar}>Menu Item 2</MenuItem>
                </BottomSheet>
            </div>
        );
    }
}

export default BottomBar;