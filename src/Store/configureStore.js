import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import logger from 'redux-logger';
import rootReducer from "../Reducers";

let middleware = [thunk];

middleware = [...middleware];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
  return store;
}
