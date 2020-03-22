// Import - Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import - Root Reducer
import rootReducer from 'redux/root-reducer';

// ----------------------------------------------------------------------------------------- //

// List of middlewares
const middlewares = [];

// Add Redux DevTools Extension
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

// Create Redux Store
const store = createStore(rootReducer, enhancer);

// Export
export default store;
