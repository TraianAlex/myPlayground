import React from 'react';
import { storiesOf } from '@storybook/react';
import { App1 } from './Components/App1';
import { App2 } from './Components/App2';
import { App2Hooks } from './Components/App2Hooks';
import { Default } from './Components/Default';
import { SetInterval, SetInterval2 } from './Components/SetInterval';
import { Profile } from './Components/Profile/Profile';
import { Resort } from './Components/Context';
import { RandomMeUsers } from './Components/ComposeComponent';
// import { NextProfile } from './Components/Profile/NextProfile/NextProfile';
import Paint from './Components/Paint/Paint';
import Playground from './Components/Paint/Playground';
import PicIndex from './PicSomeApp/PicIndex';

storiesOf('Hooks', module)
  .add('intermediate state', () => <App1 />)
  .add('without hooks', () => <App2 />)
  .add('with hooks', () => <App2Hooks />)
  .add('default', () => <Default />)
  .add('SetInteval', () => <SetInterval />)
  .add('SetIntervalHooks', () => <SetInterval2 />)
  .add('Profile', () => <Profile />)
  .add('Context', () => <Resort />)
  .add('ComposeComponent', () => <RandomMeUsers />)
  // .add('NextProfile', () => <NextProfile />) // https://codesandbox.io/s/lively-shape-016qc
  .add('paint', () => <Paint />)
  .add('playground', () => <Playground />)
  .add('picStore', () => <PicIndex />)
  ;

   // eslint-disable-next-line
