import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { statusReducer } from "./statusReducer";

const composedEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(statusReducer, composedEnhancers(applyMiddleware(thunk)));
export default store;
