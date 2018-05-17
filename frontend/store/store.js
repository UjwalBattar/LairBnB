import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// comentou out below for prod
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

// prod comment in below
// const middlewares = [thunk];

// if (process.env.NODE_ENV !== "production") {
//   // must use 'require' (import only allowed at top of file)
//   const { logger } = require("redux-logger");
//   middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
  // prod below
  // createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;
