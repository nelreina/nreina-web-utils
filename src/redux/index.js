import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispaching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default (rootReducer, initialState = {}) => {
  let enhancer;
  const middelwares = applyMiddleware(thunk, logger);

  enhancer = composeWithDevTools(middelwares);

  return createStore(rootReducer, initialState, enhancer);
};
