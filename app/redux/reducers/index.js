import { combineReducers } from 'redux';
import users from './userReducer';
//import authors from './authorReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users
  //authors,
  //ajaxCallsInProgress
});

export default rootReducer;
