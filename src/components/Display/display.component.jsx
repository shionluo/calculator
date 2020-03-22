// Import - Core
import React from 'react';
import PropTypes from 'prop-types';

// Import - Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCalculateTotal, selectCalculateNext } from 'redux/calculate/calculate.selectors';

// Import - Styles
import { DisplayContainer, DisplayValue } from './display.styles';

// ----------------------------------------------------------------------------------------- //

const Display = ({ total, next }) => (
  <DisplayContainer>
    <DisplayValue>{next || total || 0}</DisplayValue>
  </DisplayContainer>
);

const mapStateToProps = createStructuredSelector({
  total: selectCalculateTotal,
  next: selectCalculateNext,
});

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

// Export
export default connect(mapStateToProps)(Display);
