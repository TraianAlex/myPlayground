import { createStore } from "redux";
import { allReducers } from './reducers';

export const store4 = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
