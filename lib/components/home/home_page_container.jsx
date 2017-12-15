import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
// import { fetchStuff ? } from '../../actions/homepage_actions';

// none of the commented out material has been implemented yet

const mapStateToProps = state => ({
    // // tasks: Object.values(state.entities.tasks)
});

const mapDispatchToProps = dispatch => ({
    // fetchTasks: () => dispatch(fetchTasks()),
    // fetchTask: taskId => dispatch(fetchTask(taskId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);