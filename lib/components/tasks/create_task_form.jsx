import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import WorkFlowDropdown from './workflow_pos_drop';
import CategoryDropdown from './category_drop';
import ETCDropdown from './etc_drop';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      notes: "",
      etc: 60,
      workflow_pos: "unscheduled",
      tag: "Misc.",
      user_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(this.state.user_id, todo);
    this.props.toggleTodoCreateModal();
  }

  handleInput(type, value) {
    if (value) {
      this.setState({[type]: value});
    }
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  render() {
    const actions = [
      <RaisedButton
        label="Submit"
        key={'submitCreateTask'}
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
        key={'cancelCreateTask'}
        primary={true}
        onClick={this.props.toggleTodoCreateModal}
        style={{
          position: 'absolute',
          left: '28%',
          bottom: '8%'
        }}
      />,
    ];
    const { task, notes, etc, workflow_pos, tag } = this.state;

    return (
      <div className="todo-create">
        <TextField
          className="task-field"
          onChange={this.handleInput('task')}
          hintText="Enter the primary task here..."
          floatingLabelText="Task"
          style={{
            position: 'relative',
            top: '0%',
            left: '5%'
          }}
        />
        <br />
        <TextField
          className="notes-field"
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
        />
        <br />
        {/* <TextField
          className=""
          onChange={this.handleInput('etc')}
          value={60}
          hintText="Estimated Time to Completion"
          floatingLabelText="How long might it take?"
        />
        <br /> */}
        <h3 className="category-drop-title">Category</h3>
        <CategoryDropdown
          handleInput={this.handleInput}
          value={this.state.tag}
        />
        <h3 className="etc-drop-title">Duration</h3>
        <ETCDropdown
          handleInput={this.handleInput}
          value={this.state.etc}
        />
        {/* <h3 className="workflow-drop-title">Workflow Status</h3>
        <WorkFlowDropdown
          handleInput={this.handleInput}
          value={this.state.workflow_pos}
        /> */}
        {/* <TextField
          onChange={this.handleInput('workflow_pos')}
          hintText="Status"
          floatingLabelText="Where in your workflow is this?"
        /><br /> */}
        {actions}
      </div>
    );
  }
}


export default TodoForm;