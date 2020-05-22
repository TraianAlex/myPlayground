import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  //require('../src/stories');
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

setConsoleOptions({panelExclude: []}); // HMR logs
addDecorator((storyFn, context) => withConsole()(storyFn)(context)); // what stories they come

addDecorator(withKnobs);

configure(loadStories, module);