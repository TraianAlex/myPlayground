import { configure, addDecorator } from '@storybook/react';
import '@storybook/addon-console';
import { withConsole, setConsoleOptions } from '@storybook/addon-console';

function loadStories() {
  //require('../src/stories');
  const req = require.context('../src', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module);

setConsoleOptions({panelExclude: []}); // HMR logs
addDecorator((storyFn, context) => withConsole()(storyFn)(context)); // what stories they come
