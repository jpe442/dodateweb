import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class LeftSideBar extends React.Component {
  constructor(props) {
      super(props);   
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.closeLeftSidebar = this.closeLeftSidebar.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    closeLeftSidebar() {
        this.setState({open: false});
    }

    render() {
        
        return (
            <div>
                <div 
                className="left-hidden-trigger"
                onMouseOver={this.handleToggle}>left hidden
                
                </div>
                {/* <IconButton
                // className="material-icons"
                // iconStyle={styles.mediumIcon}
                // style={styles.medium}
                iconClassName="material-icons"
                tooltip="Create New Tasks"
                onMouseOver={this.handleToggle}
                >
                    cloud_circle
                </IconButton> */}
                <Drawer
                docked={false}
                width={'20%'}
                style={{textAlign: "center"}}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                >
                    <FloatingActionButton secondary={true} style={{margin: 20 }}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <MenuItem onClick={this.closeLeftSidebar}>Todo 1</MenuItem>
                    <MenuItem onClick={this.closeLeftSidebar}>Todo 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default LeftSideBar;