import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import configure from './store';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
