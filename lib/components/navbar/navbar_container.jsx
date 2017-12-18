import React from 'react';
import { connect } from 'react-redux';
import { login, logout, clearSessionErrors } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    ownProps: ownProps,
    autherrors: state.errors.session
});

const mapDispatchToProps = (dispatch) => {
    console.log(clearSessionErrors)
return ({

   logout: () => dispatch(logout()),
   login: (user) => dispatch(login(user)),
   clearSessionErrors: () => dispatch(clearSessionErrors())
})};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);