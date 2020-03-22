// Import - Styled Components
import { createGlobalStyle } from 'styled-components';

// ----------------------------------------------------------------------------------------- //

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: black;
  }

  html {
    height: 100%;
    font-size: 10px;
  }
  
  body {
    background-color: black;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    height: 100%;
  }
  
  #root {
    height: 100%;
  }
  
  @media (min-width: 400px) and (min-height: 400px) {
    html {
      font-size: 20px;
    }
  }
  
  @media (min-width: 500px) and (min-height: 500px) {
    html {
      font-size: 30px;
    }
  }
  
  @media (min-width: 600px) and (min-height: 600px) {
    html {
      font-size: 40px;
    }
  }
  
  @media (min-width: 800px) and (min-height: 800px) {
    html {
      font-size: 50px;
    }
  }  
`;

// Export
export default GlobalStyle;
