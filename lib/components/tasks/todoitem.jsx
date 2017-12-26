import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false  
    };
  }

  handleClick() {
    this.style = {zIndex: 1400}
  }

  categoryStyle(category) {
    switch (category) {
      case 'Misc.':
        return {
          backgroundColor: 'rgba(135, 210, 250, .15)', 
                border: '1px solid lightgray', 
                overflow: 'hidden' 
              }
      case 'Home':
        return { backgroundColor: 'rgba(255, 255, 224, 0.3)', border: '1px solid lightgray', overflow: 'hidden' }
      case 'test':  
        return { backgroundColor: 'rgba(255, 182, 194, 0.4)', border: '1px solid lightgray', overflow: 'hidden' }
      default:
        return { backgroundColor: 'rgba(245, 245, 245, 0.7)', border: '1px solid lightgray', overflow: 'hidden' }
    }
  }


  render() {

    let todoItem = document.getElementsByClassName('todo-item')
    $(function () {
      $(todoItem).draggable();
    });



    return (
        <div
          className="todo-item"
          onClick={this.handleClick}
          style={this.categoryStyle(this.props.todo.tag)}
        >
          <MenuItem
          // style={{display: 'flex', flexDirection: 'row'}}
          >
            {this.props.todo.task}
          </MenuItem>
        <Checkbox
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