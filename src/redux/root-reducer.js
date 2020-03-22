// Import - Redux
import { combineReducers } from 'redux';

// Import - Reducers
import calculateReducer from 'redux/calculate/calculate.reducer';

// ----------------------------------------------------------------------------------------- //

const rootReducer = combineReducers({
  calculate: calculateReducer,
});

// Export
export default rootReducer;
