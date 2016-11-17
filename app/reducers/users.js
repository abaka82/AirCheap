import { REQUEST_TICKETS, RECEIVE_TICKETS } from '../constants';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_START": {
      return {
      	...state,
      	fetching: true
      }
      break;
    }
    case "FETCH_USER_COMPLETE": {
      return {
      	...state,
      	fetching: false,
      	fetched: true,
      	users: action.payload
      }
      break;
    }
    case "FETCH_USER_ERROR": {
      return {
      	...state,
      	fetching: false,
      	error: action.payload
      }
      break;
    }
    default:
      return state;
  }
};

export default users;
