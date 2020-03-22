// Import - Core
import React from 'react';
import PropTypes from 'prop-types';

// Import - Redux
import { connect } from 'react-redux';
import { calculate } from 'redux/calculate/calculate.actions';

// Import - Styles
import { ButtonContainer } from './button.styles';

// ----------------------------------------------------------------------------------------- //

const Button = ({ name, calculate, ...otherProps }) => (
  <ButtonContainer {...otherProps}>
    <button onClick={() => calculate(name)}>{name}</button>
  </ButtonContainer>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  calculate: PropTypes.func.isRequired,
};

// Export
export default connect(null, { calculate })(Button);
