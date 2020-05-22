import React from 'react';
import { storiesOf } from '@storybook/react';
import { App } from '../TopNumber/App';
import { AppEnthused } from '../TopNumber/Enthused/AppEnthused';

storiesOf('CodeAcademy', module)
  .add('topNumber', () => <App />)
  .add('enthused', () => <AppEnthused />);
