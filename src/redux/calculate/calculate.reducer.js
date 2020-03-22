// Import - Types
import { CALCULATE } from './calculate.types';

// Import - Utils
import { calculate } from './calculate.utils';

// ----------------------------------------------------------------------------------------- //

const INITIAL_STATE = {
  total: null,
  next: null,
  operation: null,
};

const calculateReducer = (state = INITIAL_STATE, { type, buttonName }) => {
  const reducer = {
    [CALCULATE]: {
      ...state,
      ...calculate(state, buttonName),
    },
  };

  return reducer[type] || state;
};

// Export
export default calculateReducer;
