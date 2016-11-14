import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';


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
);

export default aircheapStore;
