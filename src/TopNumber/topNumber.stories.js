import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from './App';
import { AppEnthused } from './Enthused/AppEnthused';

storiesOf('CodeAcademy', module)
  .add('topNumber', () => <App />)
  .add('enthused', () => <AppEnthused />);
