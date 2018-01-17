import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { BottomSheet } from 'material-ui-bottom-sheet';
import HourSlot from '../tasks/hourslot'


class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.openBottomBar = this.openBottomBar.bind(this);
        this.closeBottomBar = this.closeBottomBar.bind(this);
    }

    openBottomBar() {
        console.log("toggling");
        this.setState({open: true});
    }

    closeBottomBar() {
        this.setState({open: false});
    }

    render() {
        const saturday = {
            width: '50%',
            height: '100%'
        }

        const sunday = {
            width: '50%',
            right: 0,
            height: '100%'
        }

        const noFade = {
            width: 0,
        }

        const toWeek = <RaisedButton 
                            primary={true}
                            label='Drag to Work Week'
                            onClick={this.closeBottomBar}
                            onDragOver={this.closeBottomBar}>
                        </RaisedButton>

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
                    onClick={this.openBottomBar} 
                    onDragOver={this.openBottomBar}
                >
                </RaisedButton>
                <div className="weekend">
                <BottomSheet
                    // className="bottom-sheet"
                    docked={false}
                    action={toWeek}
                        actionStyle={{
                            fontSize: 10,
                            position: 'absolute',
                            left: '40%'
                        }}
                    // height={500}
                    bodyStyle={saturday}
                    // onMouseOver={   }
                    // ondragleave={()=>this.closeBottomBar()}
                    open={this.state.open}
                    onRequestClose={() => this.closeBottomBar()}
                    // onRequestChange={(open) => this.setState({open})}
                >
                    <Subheader 
                    onClick={this.closeBottomBar}
                    // onDragOver={this.closeBottomBar}
                    >Saturday</Subheader>

                    <ul className="hours-available">
                        {this.props.hours.map(hour => (
                            <div
                                workflowpos="ST"
                                timeslot={hour.hour}
                            >
                                <HourSlot
                                    className="hourslot"
                                    workflowpos="ST"
                                    timeslot={hour.hour}>
                                    <div
                                        className="hoursdisplay"
                                    >{hour.hour}{hour.timeOfDay}</div>
                                    {this.props.task('ST', hour.hour)}

                                </HourSlot>

                            </div>
                        ))}
                    </ul>
                    {/* <MenuItem onClick={this.closeBottomBar}>Todo 2</MenuItem> */}

                </BottomSheet>
                <BottomSheet
                    // className="bottom-sheet"
                    docked={false}
                    // height={500}]
                    style={noFade}
                    bodyStyle={sunday}
                    open={this.state.open}

                    // onDragExit={this.closeBottomBar}

                    onRequestClose={() => this.closeBottomBar()}
                    // onRequestChange={(open) => this.setState({ open })}
                >
                    <Subheader 
                        onClick={this.closeBottomBar} 
                        // onDragOver={this.closeBottomBar}
                    >Sunday</Subheader>

                    <ul className="hours-available">
                        {this.props.hours.map(hour => (
                            <div
                                workflowpos="SN"
                                timeslot={hour.hour}
                            >
                                <HourSlot
                                    className="hourslot"
                                    workflowpos="SN"
                                    timeslot={hour.hour}>
                                    <div
                                        className="hoursdisplay"
                                    >{hour.hour}{hour.timeOfDay}</div>
                                    {this.props.task('SN', hour.hour)}

                                </HourSlot>

                            </div>
                        ))}
                    </ul>

                </BottomSheet>
                </div>
            </div>
        );
    }
}

export default BottomBar;