// Import - Core
import React from 'react';

// Import - Components
import Display from 'components/Display/display.component';
import ButtonPanel from 'components/Button-Panel/button-panel.component';

// Import - Styles
import { Container } from './app.styles';

// ----------------------------------------------------------------------------------------- //

const App = () => (
  <Container>
    <Display />
    <ButtonPanel />
  </Container>
);

// Export
export default App;
