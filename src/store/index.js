import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../_reducers';

export const store = createStore(reducer, applyMiddleware(thunk));