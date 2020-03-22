// Import - Styled Components
import styled, { css } from 'styled-components';

// ----------------------------------------------------------------------------------------- //

const wide = css`
  width: 50%;
`;

const orange = css`
  button {
    background-color: #f5923e;
    color: white;
  }
`;

const getButtonStyles = props => {
  if (props.wide) {
    return wide;
  } else if (props.orange) {
    return orange;
  } else {
    return null;
  }
};

export const ButtonContainer = styled.div`
  display: inline-flex;
  width: 25%;
  flex: 1 0 auto;

  button {
    background-color: #e0e0e0;
    border: 0;
    font-size: 1.5rem;
    margin: 0 1px 0 0;
    flex: 1 0 auto;
    padding: 0;

    &:focus {
      border: 2px solid black;
      outline: none;
    }
  }

  &:last-child button {
    margin-right: 0;
  }

  ${getButtonStyles}
`;
