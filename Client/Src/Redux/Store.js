import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxPromise from "redux-promise";

import rootReducer from "./Reducers";

const initialStata = {};

const middleware = [ReduxPromise, thunk];
const store = createStore(
  rootReducer,
  initialStata,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
