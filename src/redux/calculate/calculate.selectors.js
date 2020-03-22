// Import
import { createSelector } from 'reselect';

// ----------------------------------------------------------------------------------------- //

const selectCalculate = state => state.calculate;

export const selectCalculateTotal = createSelector([selectCalculate], calculate => calculate.total);

export const selectCalculateNext = createSelector([selectCalculate], calculate => calculate.next);
