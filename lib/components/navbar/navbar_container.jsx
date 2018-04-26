import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { 
  login, logout, clearSessionErrors 
} from '../../actions/session_actions';
import { 
  createTodo, deleteTodo, updateTodo 
} from '../../actions/todo_actions';
import { 
  toggleTodoCreateModal, toggleTodoEditModal, openEdit
} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  ownProps: ownProps,
  autherrors: state.errors.session,
  openTodoCreateModal: state.ui.openTodoCreateModal,
  openTodoEditModal: state.ui.openTodoEditModal,
  todoInEdit: state.ui.todo,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    createTodo: (userId, todo) => dispatch(createTodo(userId, todo)),
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    toggleTodoCreateModal: () => dispatch(toggleTodoCreateModal()),
    toggleTodoEditModal: (todo) => dispatch(toggleTodoEditModal(todo)),
    openEdit: (todo) => dispatch(openEdit(todo)),
    updateTodo: (userId, todo) => dispatch(updateTodo(userId, todo)),
    deleteTodo: (userId, todoId) => dispatch(deleteTodo(userId, todoId))   
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);