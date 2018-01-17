import merge from 'lodash/merge';

import { REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO, CLEAR_FORM } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      return merge({}, state, { [action.todo.id]: action.todo })
    case REMOVE_TODO:
      let newState = merge({}, state);
      delete newState[action.todoId];
      return newState;

    default:
      return state;
  }
};

export default todosReducer;