import React from 'react';
import { storiesOf } from '@storybook/react';

import AppEx from './Eduonix/containers/AppEx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Eduonix/reducers';

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

storiesOf('Redux', module)
  .add('eduonix', () => <Provider store={store}><AppEx /></Provider>)
  ;
