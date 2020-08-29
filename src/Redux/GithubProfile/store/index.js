import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerProfile from "../reducers";

export const store = createStore(reducerProfile, applyMiddleware(thunk));
