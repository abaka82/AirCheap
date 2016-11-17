import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import axios from 'axios';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

/*const logger = (store) => (next) => (action) => {
  if(typeof action !== "function"){
    console.log('dispatching:', action);
  }
  return next(action);
}*/

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const aircheapStore = createStore(
  reducers,
  enhancers,
  applyMiddleware(promise(), logger(), thunk)
);

aircheapStore.dispatch({
	type: "FOO",
	payload: axios.get('http://rest.learncode.academy/api/wstern/users')
});

export default aircheapStore;
