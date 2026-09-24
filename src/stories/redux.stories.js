import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk as reduxThunk } from "redux-thunk";

import AppEx from "../Redux/Eduonix/containers/AppEx";
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
import TodoList from "../Redux/ToDo/App";
import Pager from "../Redux/PagerApp/App";
import { TodoListRedux } from "../Redux/ToDo2/TodoListRedux";

const store5 = createStore(shopReducer, applyMiddleware(reduxThunk));

const meta = {
  title: "Redux | Redux",
};
export default meta;

export const Eduonix = {
  name: "eduonix",
  render: () => (
    <Provider store={store1}>
      <AppEx />
    </Provider>
  ),
};

export const GithubProfile = {
  name: "githubProfile",
  render: () => (
    <Provider store={store2}>
      <Profile />
    </Provider>
  ),
};

export const MyRecipes = {
  name: "myRecipes",
  render: () => (
    <Provider store={store3}>
      <App />
    </Provider>
  ),
};

export const CrushCoursePost = {
  name: "crushCoursePost",
  render: () => <Traversy />,
};

export const WithHooksStory = {
  name: "withHooks",
  render: () => (
    <Provider store={store4}>
      <WithHooks />
    </Provider>
  ),
};

export const MiniStore = {
  name: "miniStore",
  render: () => (
    <Provider store={store5}>
      <Academind />
    </Provider>
  ),
};

export const TodoListFlux = {
  name: "todoListFlux",
  render: () => <TodoList />,
};

export const PagerStory = {
  name: "pager",
  render: () => <Pager />,
};

export const TodoListReduxStory = {
  name: "todoListRedux",
  render: () => <TodoListRedux />,
};
