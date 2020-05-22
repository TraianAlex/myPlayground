import React from 'react';
import { storiesOf } from '@storybook/react';
import FormEx from '../Forms/JsonSchema/components/FormEx';
import FormNet from '../Forms/JsonSchema/components/FormNet';

storiesOf('Forms', module)
  .add('formBasic', () => <FormEx />)
  .add('formNet', () => <FormNet />)
;
