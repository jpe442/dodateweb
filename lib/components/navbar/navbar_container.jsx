import React from 'react';
import { connect } from 'react-redux';
import { login, logout, clearSessionErrors } from '../../actions/session_actions';
import NavBar from './navbar';
import { toggleTodoCreateModal } from '../../actions/ui_actions'
import { createTodo } from '../../actions/todo_actions'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    ownProps: ownProps,
    autherrors: state.errors.session,
    openTodoCreateModal: state.ui.openTodoCreateModal,
});

const mapDispatchToProps = (dispatch) => {
    console.log(clearSessionErrors)
return ({
   createTodo: (userId, todo) => dispatch(createTodo(userId, todo)),
   logout: () => dispatch(logout()),
   login: (user) => dispatch(login(user)),
   clearSessionErrors: () => dispatch(clearSessionErrors()),
   toggleTodoCreateModal: () => dispatch(toggleTodoCreateModal())
})};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);