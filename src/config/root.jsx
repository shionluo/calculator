// Import - Core
import React from 'react';

// Import - Redux
import { Provider } from 'react-redux';
import store from 'redux/store';

// Import - Router
import { BrowserRouter as Router } from 'react-router-dom';

// Import - Containers
import App from 'containers/app/app.component';

// Import - Styles
import GlobalStyles from 'utils/global-styles';

// ----------------------------------------------------------------------------------------- //

const Root = () => (
  <Provider store={store}>
    <GlobalStyles />

    <Router>
      <App />
    </Router>
  </Provider>
);

// Export
export default Root;
