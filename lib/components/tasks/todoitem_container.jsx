import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoitem';
import { toggleTodoEditModal } from '../../actions/ui_actions'
import { updateTodo } from '../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  ownProps: ownProps,
  openTodoEditModal: state.ui.openTodoEditModal,
});

const mapDispatchToProps = (dispatch) => {
  console.log(clearSessionErrors)
  return ({
    updateTodo: (userId, todo) => dispatch(updateTodo(userId, todo)),
    toggleTodoEditModal: () => dispatch(toggleTodoEditModal())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);