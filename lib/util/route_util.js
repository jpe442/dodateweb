import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    loggedIn ? <Redirect to="/" /> : <Component {...props} />
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact_path }) => (
  <Route path={path} exact path={exact_path} render={(props) => (
    loggedIn ? <Component {...props} /> : <Redirect to="/" />
  )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
