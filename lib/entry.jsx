import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
// import Modal from 'react-modal';
import {fetchTodos, fetchTodo, createTodo, updateTodo, deleteTodo} from './actions/todo_actions'
import {login, signup} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  // Modal.setAppElement(document.body);
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.fetchTodos = fetchTodos;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});



