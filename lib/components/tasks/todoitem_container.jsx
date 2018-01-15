import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoitem';
import { toggleTodoEditModal } from '../../actions/ui_actions'
import { updateTodo, fetchTodos } from '../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => {
  console.log(state.todo)
  return ({
    currentUser: state.session.currentUser,
    ownProps: ownProps,
    openTodoEditModal: state.ui.openTodoEditModal,
    todos: state.todos,
    todoInEdit: state.ui.todo
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    updateTodo: (userId, todo) => dispatch(updateTodo(userId, todo)),
    toggleTodoEditModal: (todo) => dispatch(toggleTodoEditModal(todo)),
    fetchTodos: (userId) => dispatch(fetchTodos(userId))
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);