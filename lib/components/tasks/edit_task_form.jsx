import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import WorkFlowDropdown from './workflow_pos_drop'
import CategoryDropdown from './category_drop'
import ETCDropdown from './etc_drop'
import Delete from 'material-ui/svg-icons/action/delete';
import FileFolder from 'material-ui/svg-icons/file/folder';


class EditTodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.todo.id,
      task: this.props.todo.task,
      notes: this.props.todo.notes,
      etc: this.props.todo.etc,
      workflow_pos: this.props.todo.workflow_pos,
      tag: this.props.todo.tag,
      user_id: this.props.currentUser.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUnschedule = this.handleUnschedule.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  };

  // componentWillReceiveProps(newProps) {
  //   // console.log("yo yo yo")
  //   this.setState(newProps.todo, newProps.key)
  // }

  handleCancel() {
    this.props.toggleTodoEditModal(this.props.todo)
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.updateTodo(this.state.user_id, todo);
    this.props.toggleTodoEditModal(todo);
  };

  handleUnschedule() {
    this.props.moveTask(this.props.todo.id, 'unscheduled')
    this.props.toggleTodoEditModal(this.props.todo);
  }


  handleInput(type, value) {
    if (value) {
      this.setState({ [type]: value })
    }
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  handleDelete() {
    const todo = Object.assign({}, this.state);
    this.props.deleteTodo(this.state.user_id, todo.id);
    this.props.toggleTodoEditModal();
  }

  render() {
    console.log("hereZE");
    console.log(this.props.todo)
    const smallIcon = {
      width: 36,
      height: 36,
    }

    const actions = [
      <RaisedButton
        label="Update"
        primary={true}
        onClick={this.handleSubmit}
        style={{
          position: 'absolute',
          left: '10%',
          bottom: '8%'
        }}
      />,
      <RaisedButton
        label="Cancel"
        primary={true}
        onClick={this.handleCancel}
        style={{
          position: 'absolute',
          left: '28%',
          bottom: '8%'
        }}
      />,
      <IconButton 
        tooltip="Delete Todo"
        tooltipPosition="top-center"
        onClick={this.handleDelete}
        iconStyle={smallIcon}
        touch={false}
       
        style={{
            position: 'absolute',
            display: 'flex',
            justifyContents: 'center',
            right: '4%',
            bottom: '8%',
          }}
      >
        <Delete />
      </IconButton>
    ];
    const { task, notes, etc, workflow_pos, tag } = this.state;
 
    return (
      <div className="todo-create">
        <TextField
          className="task-field"
          value={task}
          onChange={this.handleInput('task')}
          hintText="Enter the primary task here..."
          floatingLabelText="Task"
          style={{
            position: 'relative',
            top: '0%',
            left: '5%'
          }}
        /><br />
        <TextField
          className="notes-field"
          value={notes}
          onChange={this.handleInput('notes')}

          hintText="Enter any necessary notes here... (optional)"
          floatingLabelText="Notes"
          multiLine={true}
          rows={2}
          style={{
            position: 'relative',
            top: '25%',
            left: '5%'
          }}
        /><br />
      
        <h3 className="category-drop-title">Category</h3>
        <CategoryDropdown
          handleInput={this.handleInput}
          value={tag}
        />
        <h3 className="etc-drop-title">Duration</h3>
        <ETCDropdown
          handleInput={this.handleInput}
          value={etc}
        />
        <h3 className="workflow-drop-title"></h3>
        <IconButton
          tooltip="To Unscheduled"
          tooltipPosition="top-center"
          onClick={this.handleUnschedule}
          iconStyle={smallIcon}
          touch={false}

          style={{
            position: 'absolute',
            display: 'flex',
            justifyContents: 'center',
            right: '4%',
            top: '8%',
          }}
        >
          <FileFolder />
        </IconButton>

        {actions}

      </div>
    )
  }
}


export default EditTodoForm;