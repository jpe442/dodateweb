import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { ItemTypes } from '../../util/dnd';
import { DragSource } from 'react-dnd';
import Dialog from 'material-ui/Dialog';
import DialogTitle from 'material-ui/Dialog';
import DialogContent from 'material-ui/Dialog';
import TextField from 'material-ui/Dialog';
// tooltips
// import { withStyles } from 'material-ui/styles';
// import Tooltip from 'material-ui/Tooltip';
import PropTypes from 'prop-types';
import DialogActions from 'material-ui/Dialog';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import EditTodoForm from './edit_task_form'



const taskSource = {
  beginDrag(props) {
    return {id: props.todo.id,
            moveTask: props.moveTask
    };
  }
}


const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false  
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleDrag = this.handleDrag.bind(this)
    this.handleDoubleClick = this.handleDoubleClick.bind(this)
  }

  componentWillReceiveProps(newProps) {
    // console.log("in will receive in todoitem")
    this.setState(newProps.todos)
  }

  handleClick() {
    this.style = {zIndex: 2000}
  }

  handleDoubleClick() {
    console.log(this.props.todo)
    this.props.toggleTodoEditModal(this.props.todo)
  }

  categoryStyle(category) {
    switch (category) {
      case 'Misc.':
        return {
                backgroundColor: 'rgba(135, 210, 250, .15)', 
                border: '1px solid lightgray', 
                overflow: 'hidden',
                fontSize: 10,
                // position: 'absolute'
              }
      case 'Home: General':
        return { 
                backgroundColor: 'rgba(255, 255, 224, 0.3)', 
                border: '1px solid lightgray', 
                overflow: 'hidden',
                fontSize: 10,
              }
      case 'Home: Organization':
        return {
                backgroundColor: 'rgba(252, 80, 186, 0.466)',
                border: '1px solid lightgray',
                overflow: 'hidden',
                fontSize: 10,
              }
      case 'Work: General':  
        return { 
                backgroundColor: 'rgba(255, 182, 194, 0.4)', 
                border: '1px solid lightgray', 
                overflow: 'hidden',
                fontSize: 10,
              }
      case 'Work: Organization':
        return {
          backgroundColor: 'rgba(172, 255, 47, 0.466)',
                border: '1px solid lightgray',
                overflow: 'hidden',
                fontSize: 10,
              }
      default:
        return { 
                backgroundColor: 'rgba(245, 245, 245, 0.7)', 
                border: '1px solid lightgray', 
                overflow: 'hidden',
                fontSize: 10,
              }
    }
  }

  handleCheck() {
    this.props.moveTask(this.props.todo.id, "D")
  }
  
  handleDrag() {
    if (this.props.closeRightSideBar) { this.props.closeRightSideBar() }
    if (this.props.closeLeftSidebar) {this.props.closeLeftSidebar()};
    // console.log("dragging")
  }

  // moveTask(workflowpos, timeslot) {
  //   console.log("We're moving baby!!!!!")
  // }

  render() {

    // let todoItem = document.getElementsByClassName('todo-item')
    // $(function () {
    //   $(todoItem).draggable();
    // });
    const { connectDragSource, isDragging, closeLeftSidebar, moveTask, key, todo, todos} = this.props; 
    // console.log("here are the todos")
    // console.log(todos)
    const completed = todo.workflow_pos === "D"
    return connectDragSource(
        <div
          className="todo-item"
          onDragStart={this.handleDrag}
          onRightClick={()=>console.log("Right clicking")}
          onDoubleClick={this.handleDoubleClick}
          // ondrag={this.handleClick}
          style={this.categoryStyle(this.props.todo.tag)}
        >
        {/* <Tooltip id="task-item-tooltip" title={this.props.todo.task}> */}
   
          <MenuItem
          style={{fontSize: 10}}
          // tooltip="hello"
          >
            {this.props.todo.task}
          </MenuItem>
        {/* </Tooltip> */}
        <Checkbox
          checked={completed}
          onCheck={this.handleCheck}
          label=""
          inputStyle={{
            width: 24,
            height: 24,
            left: '20%',
            // position: 'relative',
            cursor: 'pointer',
            padding: "inherit"
          }}
          style={{
            // position: 'relative',
            // left: '16%',
            width: 24,
            height: 24,
            display: 'flex',
            padding: 10,
            cursor: 'default'
          }}
        />
      <Dialog
        title="View/Update Todo"
        modal={false}
        overlayStyle={{ display: 'none' }}
        style = {{
          width: '100%',
          height: '100%',
          zIndex: 1500,
          // display: 'flex',
          // justifyContents: 'center'
        }}
        bodyStyle = {{height: '100%'}}
        titleStyle = {{
          paddingTop: '3%',
          padding: '1%',
          fontSize: '80%',
          position: 'relative',
          left: '7%',
          top: '20%'
        }}
        onRequestClose = { this.props.toggleTodoEditModal }
        open = { this.props.openTodoEditModal }
      >
        <EditTodoForm
          todo={this.props.todoInEdit}
          // key={todos[todo.id]}
          currentUser={this.props.currentUser}
          // fetchTodos={this.props.fetchTodos}
          updateTodo={this.props.updateTodo}
          deleteTodo={this.props.deleteTodo}
          toggleTodoEditModal={this.props.toggleTodoEditModal} />
      </Dialog >
      </div>
      )
  }
}
    
TodoItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};


export default DragSource(ItemTypes.TASK, taskSource, collect)(TodoItem);