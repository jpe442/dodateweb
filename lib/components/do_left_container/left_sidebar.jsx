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

    componentDidMount() {
        this.props.fetchTodos(this.props.currentUser.id);
    }
    
    componentWillReceiveProps(newProps) {
        this.setState(newProps.todos)
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    closeLeftSidebar() {
        this.setState({open: false});
    }

    openNewTodo() {
        
    }

    render() {
        let todosVals = Object.values(this.props.todos)
        let todosUnscheduled = todosVals.filter(todo => todo.workflow_pos === 'unscheduled')

        
        return (
            <div>
                <div 
                className="left-hidden-trigger"
                onMouseOver={this.handleToggle}>left hidden
                
                </div>
                <Drawer
                docked={false}
                width={'20%'}
                overlayStyle={{ zIndex: 10 }}
                // zDepth={2}
                style={{textAlign: "left", zIndex: 10}}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
                   
                >
                    <FloatingActionButton 
                    secondary={true} 
                    style={{margin: 20, zIndex: 2500 }}
                    onClick={this.props.toggleTodoCreateModal}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                    {todosUnscheduled.map(todo => (
                    <MenuItem
                    key={todo.id}
                    >
                    {todo.task}
                    </MenuItem>
        ))}
                    {/* <MenuItem onClick={this.closeLeftSidebar}>Todo 1</MenuItem>
                    <MenuItem onClick={this.closeLeftSidebar}>Todo 2</MenuItem> */}
                </Drawer>
                
            </div>
        );
    }
}

export default LeftSideBar;