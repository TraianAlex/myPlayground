import React from 'react';
import { storiesOf } from '@storybook/react';
import FormEx from './JsonSchema/components/FormEx';
import FormNet from './JsonSchema/components/FormNet';

storiesOf('Forms', module)
  .add('formBasic', () => <FormEx />)
  .add('formNet', () => <FormNet />)
;
