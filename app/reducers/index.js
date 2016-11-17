import { combineReducers } from 'redux';
import airports from './airports';
import route from './route';
import tickets from './tickets';
import users from './users';

const rootReducer = combineReducers({
  airports,
  route,
  tickets,
  users
});

export default rootReducer;
