import merge from 'lodash/merge';

import {
  TOGGLE_LOADING,
  TOGGLE_TODOCREATE_MODAL,
  TOGGLE_TODOEDIT_MODAL,
  TODO_FOCUS
} from '../actions/ui_actions';

const _clear = Object.freeze({
  
  openTodoCreateModal: false,
  openTodoEditModal: false,
  todo: {},
  
});

const uiReducer = (state = _clear, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_TODOCREATE_MODAL:
      let newTDCState = merge({}, state)
      newTDCState.openTodoCreateModal = !newTDCState.openTodoCreateModal;
      return newTDCState;
    case TOGGLE_TODOEDIT_MODAL:
      let newTDEState = merge({}, state)
      newTDEState.todo = action.todo;
      newTDEState.openTodoEditModal = !newTDEState.openTodoEditModal
      return newTDEState;
    case TODO_FOCUS:
      let newTDFState = merge({}, state)
      newTDFState.todo = action.todo;
      return newTDFState;
    default:
      return state;
  }
};

export default uiReducer;