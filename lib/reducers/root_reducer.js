import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

export default combineReducers({
  // ui: uiReducer,
  session: sessionReducer,
  // errors: errorsReducer,
  // search: searchReducer,
});