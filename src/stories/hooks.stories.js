import React from "react";
import { storiesOf } from "@storybook/react";

import { App1 } from "../Hooks/Components/App1";
import { App2 } from "../Hooks/Components/App2";
import { App2Hooks } from "../Hooks/Components/App2Hooks";
import { Default } from "../Hooks/Components/Default";
import { SetInterval, SetInterval2 } from "../Hooks/Components/SetInterval";
import { Profile } from "../Hooks/Components/Profile/Profile";
import { Resort } from "../Hooks/Components/Context";
import { RandomMeUsers } from "../Hooks/Components/ComposeComponent";
// import { NextProfile } from './Components/Profile/NextProfile/NextProfile';
import Paint from "../Hooks/Components/Paint/Paint";
import Playground from "../Hooks/Components/Paint/Playground";
import PicIndex from "../Hooks/PicSomeApp/PicIndex";
import StateManager from "../Hooks/Context/App";

import { Provider } from "react-redux";
import MiniStoreContext from "../Hooks/MiniStoreContext/App";
import shopReducer from "../Hooks/MiniStoreContext/store/reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import MaxIntro from "../Hooks/MaxIntro/App";

//import App from './Components/StateManagement/1-simple-count';
//import App from './Components/StateManagement/2-lift-state';
//import App from './Components/StateManagement/3-context';
//import App from './Components/StateManagement/4-context-with-logic';
import App from "../Hooks/Components/StateManagement/5-context-with-reducer";

import { AppContact } from '../Hooks/KeyProp/Contact';

const store6 = createStore(shopReducer, applyMiddleware(thunk));

storiesOf("Hooks", module)
  .add("intermediate state", () => <App1 />)
  .add("without hooks", () => <App2 />)
  .add("with hooks", () => <App2Hooks />)
  .add("default", () => <Default />)
  .add("SetInteval", () => <SetInterval />)
  .add("SetIntervalHooks", () => <SetInterval2 />)
  .add("Profile", () => <Profile />)
  .add("Context", () => <Resort />)
  .add("ComposeComponent", () => <RandomMeUsers />)
  // .add('NextProfile', () => <NextProfile />) // https://codesandbox.io/s/lively-shape-016qc
  .add("paint", () => <Paint />)
  .add("playground", () => <Playground />)
  .add("picStore", () => <PicIndex />)
  .add("stateManagement", () => <StateManager />)
  .add("miniStoreContext", () => (
    <Provider store={store6}>
      <MiniStoreContext />
    </Provider>
  ))
  .add("maxIntro", () => <MaxIntro />)
  .add("statemanagement", () => <App />)
  .add("AppContact", () => <AppContact />);

// eslint-disable-next-line
