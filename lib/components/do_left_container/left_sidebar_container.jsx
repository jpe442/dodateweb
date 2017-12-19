import React from 'react';
import { connect } from 'react-redux';
// import {  } from '../../actions/ ? ';
import LeftSideBar from './left_sidebar';
import {fetchTodos, createTodo} from '../../actions/todo_actions';
import {toggleTodoCreateModal} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  todos: state.todos,
  openTodoCreateModal: state.ui.openTodoCreateModal
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: (userId) => dispatch(fetchTodos(userId)),
  createTodo: (userId, todo) => dispatch(createTodo(userId, todo)),
  toggleTodoCreateModal: () => dispatch(toggleTodoCreateModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSideBar);