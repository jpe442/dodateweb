import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import { ItemTypes } from '../../util/dnd';
import { DragSource } from 'react-dnd';
import PropTypes from 'prop-types'

const taskSource = {
  beginDrag(props) {
    console.log("in taskSource")
    console.log(props)
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
  }

  handleClick() {
    this.style = {zIndex: 2000}
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
      case 'Home':
        return { 
                backgroundColor: 'rgba(255, 255, 224, 0.3)', 
                border: '1px solid lightgray', 
                overflow: 'hidden',
                fontSize: 10,
              }
      case 'test':  
        return { 
                backgroundColor: 'rgba(255, 182, 194, 0.4)', 
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
    console.log("dragging")
  }

  // moveTask(workflowpos, timeslot) {
  //   console.log("We're moving baby!!!!!")
  // }

  render() {

    // let todoItem = document.ge tElementsByClassName('todo-item')
    // $(function () {
    //   $(todoItem).draggable();
    // });
    const { connectDragSource, isDragging, closeLeftSidebar, moveTask } = this.props; 

    const completed = this.props.todo.workflow_pos === "D"
    return connectDragSource(
        <div
          className="todo-item"
          onDragStart={this.handleDrag}
          onRightClick={()=>console.log("Right clicking")}
          onDoubleClick={()=>console.log("what what")}
          // ondrag={this.handleClick}
          style={this.categoryStyle(this.props.todo.tag)}
        >
          <MenuItem
          style={{fontSize: 10}}

          >
            {this.props.todo.task}
          </MenuItem>
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
      </div>
    )
  }
}

TodoItem.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

console.log("hello!!!")
console.log(collect)
console.log(taskSource)
console.log(ItemTypes.TASK)

export default DragSource(ItemTypes.TASK, taskSource, collect)(TodoItem);