// Import - Types
import { CALCULATE } from './calculate.types';

// ----------------------------------------------------------------------------------------- //

export const calculate = buttonName => ({
  type: CALCULATE,
  buttonName,
});
