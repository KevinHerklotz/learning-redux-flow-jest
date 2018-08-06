import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk];
// reducer(Function), [preloadedState](any), [enhancer](Function)
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
