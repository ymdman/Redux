import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';

import createFinalStore from './store';

const store = createFinalStore();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
