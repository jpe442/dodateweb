import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// import TodoItem from '../tasks/todoitem' 
import TodoItemContainer from '../tasks/todoitem_container'   

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

    markComplete(todo) {
        todo.workflow_pos = 'D';
    }

    render() {
        let todosVals = Object.values(this.props.todos)
        let todosUnscheduled = todosVals.filter(todo => todo.workflow_pos === 'unscheduled')
        
        
        return (
            <div>
                <div 
                className="left-hidden-trigger"
                onMouseOver={this.handleToggle}
                onDragOver={this.handleToggle}>
                </div>
                <Drawer
                    onDragLeave={()=>closeLeftSidebar()}
                    docked={false}
                    width={'20%'}
                    overlayStyle={{ zIndex: 1000 }}
                    style={{textAlign: "center", zIndex: 10, overflow: "visible", fontSize: 10}}
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
                    <ul className="menu-items-left-drawer">
                        {todosUnscheduled.reverse().map(todo => (
                            <TodoItemContainer
                                key={todo.id}
                                todo={todo}
                                closeLeftSidebar={this.closeLeftSidebar}
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

export default LeftSideBar;