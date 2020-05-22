import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../Diverse/Knp/Components/App';

const shouldShowHearth = true;

storiesOf('Diverse/Knp', module)
  .add('Weight Lifting', () => <App  withHearth={shouldShowHearth} />);
