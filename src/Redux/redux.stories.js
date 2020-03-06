import React from 'react';
import { storiesOf } from '@storybook/react';

import AppEx from './Eduonix/containers/AppEx';
import { Provider } from 'react-redux';
import Profile from './GithubProfile/containers/App';
import App from './MyRecipes/components/App';
import { store as store1 } from './Eduonix/store';
import { store as store2 } from './GithubProfile/store';
import { store3 } from './MyRecipes/store';
import Traversy from './CrashCourse/Traversy';
import WithHooks from './WithHooks/App';
import { store4 } from './WithHooks/store';
import Academind from './Academind/App';
import shopReducer from './Academind/store/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
const store5 = createStore(shopReducer, applyMiddleware(reduxThunk));

storiesOf('Redux', module)
  .add('eduonix', () => <Provider store={store1}><AppEx /></Provider>)
  .add('githubProfile', () => <Provider store={store2}><Profile /></Provider>)
  .add('myRecipes', () => <Provider store={store3}><App /></Provider>)
  .add('crushCoursePost', () => <Traversy />)
  .add('withHooks', () => <Provider store={store4}><WithHooks /></Provider>)
  .add('miniStore', () => <Provider store={store5}><Academind /></Provider>)
  ;
