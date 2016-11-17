import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import axios from 'axios';
//import logger from 'redux-logger';

const logger = (store) => (next) => (action) => {
  if(typeof action !== "function"){
    console.log('dispatching:', action);
  }
  return next(action);
}

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const aircheapStore = createStore(
  reducers,
  enhancers,
  applyMiddleware(logger, thunk)
  //applyMiddleware(logger(), thunk)
);

aircheapStore.dispatch({type: "FETCH_USER_START"});

axios.get('http://rest.learncode.academy/api/wstern/users')
.then((response) => {
	aircheapStore.dispatch({type: "FETCH_USER_COMPLETE"})
	//aircheapStore.dispatch({type: "FETCH_USER_COMPLETE", payload: response.data})
})

export default aircheapStore;
