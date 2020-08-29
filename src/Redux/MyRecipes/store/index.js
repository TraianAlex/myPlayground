/* eslint-disable global-require */
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import { makeRootReducer } from "../reducers";

const middleware = [thunk];

if (process.env.NODE_ENV !== "production") {
  const { createLogger } = require("redux-logger");
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(["recipes", "favorites"])
);

export const store3 = createStore(makeRootReducer(), enhancer);
