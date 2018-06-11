import sessionErrorsReducer from './session_errors_reducer';
import errorMessageReducer from './error_message_reducer';
import { combineReducers } from 'redux';

export default combineReducers( {
  sessionErrors: sessionErrorsReducer,
  errorMessage: errorMessageReducer
});
