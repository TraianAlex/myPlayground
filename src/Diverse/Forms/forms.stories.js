import React from 'react';
import { storiesOf } from '@storybook/react';
import FormEx from './JsonSchema/components/FormEx';

storiesOf('Forms', module)
  .add('formBasic', () => <FormEx />)
;
