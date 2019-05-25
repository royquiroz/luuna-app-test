import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import users from "./reducers/users";
import repositories from "./reducers/repositories";
import { getUsers, getRepositories } from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  users,
  repositories
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getUsers);
sagaMiddleware.run(getRepositories);

export default store;
