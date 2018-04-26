import React from 'react';
import { connect } from 'react-redux';
import { toggleTodoEditModal, todoFocus } from '../../actions/ui_actions';
// import {  } from '../../actions/ ? ';
import RightSideBar from './right_sidebar';

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
  openTodoEditModal: state.ui.openTodoEditModal,
  todoInEdit: state.ui.todo
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodoEditModal: (todo) => dispatch(toggleTodoEditModal(todo)),
  todoFocus: (todo) => dispatch(todoFocus(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightSideBar);