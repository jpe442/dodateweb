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

  


  render() {


    let todoItem = document.getElementsByClassName('todo-item')
    $(function () {
      $(todoItem).draggable();
    });
    return (
        <div
          className="todo-item"
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