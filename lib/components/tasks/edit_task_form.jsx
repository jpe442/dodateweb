import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import WorkFlowDropdown from './workflow_pos_drop'
import CategoryDropdown from './category_drop'
import ETCDropdown from './etc_drop'

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
  };

  componentWillReceiveProps(newProps) {
    // console.log("yo yo yo")
    // this.setState(newProps.todo, newProps.key)
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.todo.task)
    const todo = Object.assign({}, this.state);
    this.props.updateTodo(this.state.user_id, todo);
    this.props.toggleTodoEditModal();
    this.props.ownProps.history.push('/homepage');
  };

  handleInput(type, value) {
    
    if (value) {
      this.setState({ [type]: value })
    }

    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  render() {
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
        // className="login-modal-cancel-btn"
        label="Cancel"
        primary={true}
        onClick={this.props.toggleTodoEditModal}
        style={{
          position: 'absolute',
          left: '28%',
          bottom: '8%'
        }}
      />,

    ];
    const { task, notes, etc, workflow_pos, tag } = this.state;
    // console.log("this below is what this slice of state is pointing at")
    // console.log(this.state)
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
        {/* <TextField
          className=""
          onChange={this.handleInput('etc')}
          value={60}
          hintText="Estimated Time to Completion"
          floatingLabelText="How long might it take?"
        /><br /> */}
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
        <h3 className="workflow-drop-title">Workflow Status</h3>
        <WorkFlowDropdown
          handleInput={this.handleInput}
          value={workflow_pos}
        />
        {/* <TextField
          onChange={this.handleInput('workflow_pos')}
          hintText="Status"
          floatingLabelText="Where in your workflow is this?"
        /><br /> */}

        {actions}

        {/* <div className="new-form">
          <h3>New Todo</h3>
          <form onSubmit={this.handleSubmit}>
            <label className="question-title-field">
              <input
                type="text"
                placeholder="Your question here..."
                value={title}
                onChange={this.handleInput('task')}
              />
            </label>
            <label className="question-body-field">
              <input
                type="text"
                placeholder="Additional context here..."
                value={body}
                onChange={this.handleInput('body')}
              />
            </label>
            <button
              className="question-form-submit-btn"
              onClick={this.handleSubmit}>Submit</button>
          </form>

        </div> */}
      </div>
    )
  }
}


export default EditTodoForm;