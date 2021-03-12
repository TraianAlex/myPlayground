import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from '../CodeAcademy/App';
import { AppEnthused } from '../CodeAcademy/Enthused/AppEnthused';
import Forecast from '../CodeAcademy/hooks/Forecast';
import Shop from 'CodeAcademy/hooks/Shop';
import SocialNetwork from 'CodeAcademy/hooks/SocialNetwork';

storiesOf('CodeAcademy', module)
  .add('topNumber', () => <App />)
  .add('enthused', () => <AppEnthused />)
  .add('forecast', () => <Forecast />)
  .add('clothes', () => <Shop />)
  .add('social', () => <SocialNetwork />);
