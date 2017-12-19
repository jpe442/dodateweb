import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import todosReducer from './todos_reducer';
import uiReducer from './ui_reducer';

export default combineReducers({
  ui: uiReducer,
  session: sessionReducer,
  errors: errorsReducer,
  todos: todosReducer,
  // search: searchReducer,
});