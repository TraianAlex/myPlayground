import React from 'react';
import { storiesOf } from '@storybook/react';

import AppEx from './Eduonix/containers/AppEx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Eduonix/reducers';

import Profile from './GithubProfile/containers/App';
import reducerProfile from './GithubProfile/reducers';

let store1 = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

let store2 = createStore(
  reducerProfile,
  applyMiddleware(thunk)
);

storiesOf('Redux', module)
  .add('eduonix', () => <Provider store={store1}><AppEx /></Provider>)
  .add('githubProfile', () => <Provider store={store2}><Profile /></Provider>)
  ;
