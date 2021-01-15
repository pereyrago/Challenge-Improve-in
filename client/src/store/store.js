import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
    /*this extension is for see the redux store flow data
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
  )
);

export default store;
