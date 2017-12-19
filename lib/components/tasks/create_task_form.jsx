import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      notes: "",
      etc: "",
      workflow_pos: "",
      tag: "",
      user_id: this.props.currentUser.id,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(this.state.user_id, todo);
    this.props.toggleTodoCreateModal();
    this.props.ownProps.history.push('/homepage');
  };

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  };

  render() {
    const actions = [
      <RaisedButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
        style={{
          position: 'absolute',
          right: '26%',
          bottom: '26%'
        }}
      />,
      <RaisedButton
        // className="login-modal-cancel-btn"
        label="Cancel"
        primary={true}
        onClick={this.props.toggleTodoCreateModal}
        style={{
          position: 'absolute',
          right: '10%',
          bottom: '26%'
        }}
      />,

    ];
    const { task, notes, etc, workflow_pos, tag } = this.state;
    // console.log("this below is what this slice of state is pointing at")
    // console.log(this.state)
    return (
      <div className="todo-create">
        <TextField
          onChange={this.handleInput('task')}
          hintText="Enter the primary task here..."
          floatingLabelText="Task"
        /><br />
        <TextField
          onChange={this.handleInput('notes')}
          hintText="Enter any necessary notes here... (optional)"
          floatingLabelText="Notes"
          multiLine={true}
          rows={2}
        /><br />
        <TextField
          onChange={this.handleInput('etc')}
          hintText="Estimated Time to Completion"
          floatingLabelText="How long might it take?"
        /><br />
        <TextField
          onChange={this.handleInput('tag')}
          hintText="Category"
          floatingLabelText="What category is this in?"
        /><br />
        <TextField
          onChange={this.handleInput('workflow_pos')}
          hintText="Status"
          floatingLabelText="Where in your workflow is this?"
        /><br />

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


export default TodoForm;