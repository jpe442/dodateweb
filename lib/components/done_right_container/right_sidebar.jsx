import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import TodoItemContainer from '../tasks/todoitem'    
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class RightSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
        this.closeRightSideBar = this.closeRightSideBar.bind(this);
    }

    handleToggle() {
        console.log("toggling");
        this.setState({open: !this.state.open});
    }

    closeRightSideBar() {
        this.setState({open: false});
    }

    render() {

        let doneItems = Object.values(this.props.todos).filter(
            todo => todo.workflow_pos === 'D'
        )
        return (
            <div>
                <div
                    className="right-hidden-trigger"
                    onMouseOver={this.handleToggle}
                    onDragOver={this.handleToggle}>
                </div>
                {/* <IconButton
                // iconStyle={styles.mediumIcon}
                // style={styles.medium}                
                iconClassName="material-icons"
                tooltip="Completed Tasks"
                onClick={this.handleToggle}
                >
                    cloud_circle
                </IconButton> */}
                <Drawer
                docked={false}  
                width={'20%'}
                openSecondary={true}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                >
                    <ul className="menu-items-left-drawer">
                        {doneItems.reverse().map(todo => (
                            <TodoItemContainer
                                key={todo.id}
                                todos={this.props.todos}
                                todo={todo}
                                closeRightSideBar={this.closeRightSideBar}
                                toggleTodoEditModal={this.props.toggleTodoEditModal}
                                // onClick={()=>this.markComplete(todo)}
                                // onClick={()=>console.log("getting clicked")}
                                moveTask={this.props.moveTask}
                            >
                            </TodoItemContainer>
                        ))}
                    </ul>
                </Drawer>
            </div>
        );
    }
}

export default RightSideBar;