import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coronaReducer from './corona/corona';

const reducer = combineReducers({
  corona: coronaReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
