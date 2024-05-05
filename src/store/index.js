
// في ملف store.js

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import {thunk}from 'redux-thunk';

// استخدام composeEnhancers حتى في حالة عدم توفر Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// إنشاء المتجر
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
export default store;










