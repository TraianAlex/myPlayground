import React from "react";
import { storiesOf } from "@storybook/react";

import AppEx from "../Redux/Eduonix/containers/AppEx";
import { Provider } from "react-redux";
import Profile from "../Redux/GithubProfile/containers/App";
import App from "../Redux/MyRecipes/components/App";
import { store as store1 } from "../Redux/Eduonix/store";
import { store as store2 } from "../Redux/GithubProfile/store";
import { store3 } from "../Redux/MyRecipes/store";
import Traversy from "../Redux/CrashCourse/Traversy";
import WithHooks from "../Redux/WithHooks/App";
import { store4 } from "../Redux/WithHooks/store";

import { Academind } from "../Redux/Academind/Academind";
import shopReducer from "../Redux/Academind/store/reducers";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import TodoList from "../Redux/ToDo/App";
import Pager from "../Redux/PagerApp/App";
import TodoList2 from "../Redux/ToDo2/Main"; // Orelly

const store5 = createStore(shopReducer, applyMiddleware(reduxThunk));

storiesOf("Redux | Redux", module)
  .add("eduonix", () => (
    <Provider store={store1}>
      <AppEx />
    </Provider>
  ))
  .add("githubProfile", () => (
    <Provider store={store2}>
      <Profile />
    </Provider>
  ))
  .add("myRecipes", () => (
    <Provider store={store3}>
      <App />
    </Provider>
  ))
  .add("crushCoursePost", () => <Traversy />)
  .add("withHooks", () => (
    <Provider store={store4}>
      <WithHooks />
    </Provider>
  ))
  .add("miniStore", () => (
    <Provider store={store5}>
      <Academind />
    </Provider>
  ))
  .add("todoListFlux", () => <TodoList />)
  .add("pager", () => <Pager />)
  .add("todoListRedux", () => <TodoList2 />);
