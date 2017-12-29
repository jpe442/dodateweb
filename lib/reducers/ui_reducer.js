import merge from 'lodash/merge';

import {
  TOGGLE_LOADING,
  TOGGLE_TODOCREATE_MODAL
} from '../actions/ui_actions';

const _clear = Object.freeze({
  
  openTodoCreateModal: false,
  
});

const uiReducer = (state = _clear, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TOGGLE_TODOCREATE_MODAL:
      let newTDCState = merge({}, state)
      newTDCState.openTodoCreateModal = !newTDCState.openTodoCreateModal;
      return newTDCState;
    // case TOGGLE_QEDIT_MODAL:
    //   let newQEState = merge({}, state)
    //   newQEState.openQEditModal = !newQEState.openQEditModal;
    //   return newQEState;
    // case EDIT_ANSWER_MODE:
    //   let newAEState = merge({}, state)
    //   newAEState.answerToEdit = action.answer;
    //   newAEState.toggleEditAnswerMode = !newAEState.toggleEditAnswerMode
    //   return newAEState;
    // case EDIT_COMMENT_MODE:
    //   let newCEState = merge({}, state)
    //   newCEState.commentToEdit = action.comment;
    //   newCEState.toggleEditCommentMode = !newCEState.toggleEditCommentMode
    //   return newCEState
    default:
      return state;
  }
};

export default uiReducer;