import React from 'react';

import { App1 } from '../Hooks/Components/App1';
import { App2 } from '../Hooks/Components/App2';
import { App2Hooks } from '../Hooks/Components/App2Hooks';
import { Default } from '../Hooks/Components/Default';
import { SetInterval, SetInterval2 } from '../Hooks/Components/SetInterval';
import { Profile } from '../Hooks/Components/Profile/Profile';
import { Resort } from '../Hooks/Components/Context';
import { RandomMeUsers } from '../Hooks/Components/ComposeComponent';
import Paint from '../Hooks/Components/Paint/Paint';
import Playground from '../Hooks/Components/Paint/Playground';
import PicIndex from '../Hooks/PicSomeApp/PicIndex';
import Movies from '../Hooks/Context/App';
import MiniStoreContext from '../Hooks/MiniStoreContext/App';
import MaxIntro from '../Hooks/MaxIntro/App';
import TodoContext from '../Hooks/TodoContext/App';
import App from '../Hooks/Components/StateManagement/5-context-with-reducer';
import { AppContact } from '../Hooks/KeyProp/Contact';

const meta = {
  title: 'Hooks',
};
export default meta;

export const IntermediateState = {
  name: 'intermediate state',
  render: () => <App1 />,
};

export const WithoutHooks = {
  name: 'without hooks',
  render: () => <App2 />,
};

export const WithHooks = {
  name: 'with hooks',
  render: () => <App2Hooks />,
};

export const DefaultStory = {
  name: 'default',
  render: () => <Default />,
};

export const SetIntervalStory = {
  name: 'SetInteval',
  render: () => <SetInterval />,
};

export const SetIntervalHooks = {
  name: 'SetIntervalHooks',
  render: () => <SetInterval2 />,
};

export const ProfileStory = {
  name: 'Profile',
  render: () => <Profile />,
};

export const ContextStory = {
  name: 'Context',
  render: () => <Resort />,
};

export const ComposeComponent = {
  name: 'ComposeComponent',
  render: () => <RandomMeUsers />,
};

export const PaintStory = {
  name: 'paint',
  render: () => <Paint />,
};

export const PlaygroundStory = {
  name: 'playground',
  render: () => <Playground />,
};

export const PicStore = {
  name: 'picStore',
  render: () => <PicIndex />,
};

export const MoviesManagement = {
  name: 'moviesManagement',
  render: () => <Movies />,
};

export const MiniStoreContextStory = {
  name: 'miniStoreContext',
  render: () => <MiniStoreContext />,
};

export const MaxIntroStory = {
  name: 'maxIntro',
  render: () => <MaxIntro />,
};

export const StateManagement = {
  name: 'statemanagement',
  render: () => <App />,
};

export const TodoContextStory = {
  name: 'todo-context',
  render: () => <TodoContext />,
};

export const AppContactStory = {
  name: 'AppContact',
  render: () => <AppContact />,
};
