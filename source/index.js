import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FocusStyleManager } from '@blueprintjs/core';

import { store } from 'store';

import 'styles/index.scss';

import { Application } from './Application.Container';

FocusStyleManager.onlyShowFocusOnTabs();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('application'),
);
