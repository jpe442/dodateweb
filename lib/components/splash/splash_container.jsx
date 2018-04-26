import React from 'react';
import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state, ownProps) => ({
  autherrors: state.errors.session,
  ownProps: ownProps
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);