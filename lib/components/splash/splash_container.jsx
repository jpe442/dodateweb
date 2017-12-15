import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import Splash from './splash'
const mapStateToProps = (state, ownProps) => ({
  ownProps: ownProps
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);