// Import
import Big from 'big.js';

// ----------------------------------------------------------------------------------------- //

// Check whether number or not
const isNumber = item => {
  return /[0-9]+/.test(item);
};

// Operate expression
const operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne || '0');
  const two = Big(numberTwo || (operation === '÷' || operation === 'x' ? '1' : '0'));

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x') {
    return one.times(two).toString();
  }

  if (operation === '÷') {
    if (two === '0') {
      alert('Divide by 0 error');
      return '0';
    } else {
      return one.div(two).toString();
    }
  }

  throw Error(`Unknown operation '${operation}'`);
};

// Calculate
export const calculate = (state, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && state.next === '0') {
      return {};
    }

    // If there is an operation, update next
    if (state.operation) {
      if (state.next) {
        return { next: state.next + buttonName };
      }
      return { next: buttonName };
    }

    // If there is no operation, update next and clear the value
    if (state.next) {
      const next = state.next === '0' ? buttonName : state.next + buttonName;
      return {
        next,
        total: null,
      };
    }

    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '%') {
    if (state.operation && state.next) {
      const result = operate(state.total, state.next, state.operation);

      return {
        total: Big(result)
          .div(Big('100'))
          .toString(),
        next: null,
        operation: null,
      };
    }

    if (state.next) {
      return {
        next: Big(state.next)
          .div(Big('100'))
          .toString(),
      };
    }

    return {};
  }

  if (buttonName === '.') {
    if (state.next) {
      // Ignore a . if the next number already has one
      if (state.next.includes('.')) {
        return {};
      }

      return { next: state.next + '.' };
    }

    return { next: '0.' };
  }

  if (buttonName === '=') {
    if (state.next && state.operation) {
      return {
        total: operate(state.total, state.next, state.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === '+/-') {
    if (state.next) {
      return { next: (-1 * parseFloat(state.next)).toString() };
    }

    if (state.total) {
      return { total: (-1 * parseFloat(state.total)).toString() };
    }

    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!state.next && !state.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (state.operation) {
    return {
      total: operate(state.total, state.next, state.operation),
      next: null,
      operation: buttonName,
    };
  }

  // No operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!state.next) {
    return { operation: buttonName };
  }

  // Save the operation and shift 'next' into 'total'
  return {
    total: state.next,
    next: null,
    operation: buttonName,
  };
};
