import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { updateTodo } from '../../actions/todo_actions';

// none of the commented out material has been implemented yet

const mapStateToProps = state => ({
    todos: state.todos,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    updateTodo: (userId, todo) => dispatch(updateTodo(userId, todo)),
    fetchTodos: (userId) => dispatch(fetchTodos(userId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);