import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './Components/App';

const shouldShowHearth = true;

storiesOf('Knp', module)
  .add('Weight Lifting', () => <App  withHearth={shouldShowHearth} />);
