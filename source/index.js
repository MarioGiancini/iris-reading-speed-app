import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { FocusStyleManager } from '@blueprintjs/core';

import { store, history } from 'store';

import 'styles/index.scss';

import { Application } from './Application';

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('application'),
);
