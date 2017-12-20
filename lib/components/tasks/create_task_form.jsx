import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import WorkFlowDropdown from './workflow_pos_drop'
import CategoryDropdown from './category_drop'
import ETCDropdown from './etc_drop'

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
  };

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(this.state.user_id, todo);
    this.props.toggleTodoCreateModal();
    this.props.ownProps.history.push('/homepage');
  };

  handleInput(type, value) {
    // let e = undefined;
    console.log(this.state)
    console.log("in handleInput")
    console.log(type)
    console.log(value)
    console.log(this.setState)  
    if (value) {
      this.setState({[type]: value})
      }

      return (e) => {
          console.log("about to set workflow")
          this.setState({ [type]: e.target.value });
        }
  };
    // console.log(e)
       
    


  render() {
    const actions = [
      <RaisedButton
        label="Submit"
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
        onClick={this.props.toggleTodoCreateModal}
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
          onChange={this.handleInput('task')}
          hintText="Enter the primary task here..."
          floatingLabelText="Task"
          style={{position: 'relative',
                  top: '0%',
                  left: '5%'
          }}
        /><br />
        <TextField
          className="notes-field"
          onChange={this.handleInput('notes')}
          hintText="Enter any necessary notes here... (optional)"
          floatingLabelText="Notes"
          multiLine={true}
          rows={2}
          style={{
            position: 'relative',
            top: '30%',
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
          value={this.state.tag}
        />
        <h3 className="etc-drop-title">Duration</h3>
        <ETCDropdown
          handleInput={this.handleInput}
          value={this.state.etc}
        />
        <h3 className="workflow-drop-title">Workflow Status</h3>
        <WorkFlowDropdown
          handleInput={this.handleInput}
          value={this.state.workflow_pos}
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


export default TodoForm;