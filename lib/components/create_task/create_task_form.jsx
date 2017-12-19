import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      notes: "",
      etc: "",
      workflow_pos: "",
      user_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo(todo);
    this.props.toggleTodoCreateModal();
    this.props.ownProps.history.push('/homepage');
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    }
  }

  render() {
    const { task, notes } = this.state;
    // console.log("this below is what this slice of state is pointing at")
    // console.log(this.state)
    return (
      <div className="new-form-container">
        <div className="new-form">
          <h3>New Question</h3>
          <form onSubmit={this.handleSubmit}>
            <label className="question-title-field">
              <input
                type="text"
                placeholder="Your question here..."
                value={title}
                onChange={this.handleInput('title')}
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

        </div>




      </div>
    )
  }
}


export default QuestionForm;