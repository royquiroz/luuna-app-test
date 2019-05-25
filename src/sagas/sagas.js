import { takeLatest, put, delay } from "redux-saga/effects";
import { type as findUsersType } from "../redux/actions/findUsers";
import { type as findRepositoriesType } from "../redux/actions/findRepositories";
import { searchUsers, searchRepositories } from "../service";

function* getUsersAsync(e) {
  let users = [];
  if (e.payload === "") {
    users = [];
  } else {
    searchUsers(e.payload).then(data => (users = data.data.items));
  }
  yield delay(1000);
  yield put({ type: "getUsersAsync", payload: users });
}

function* getRepositoriesAsync(e) {
  let repositories = [];
  if (e.payload === "") {
    repositories = [];
  } else {
    searchRepositories(e.payload).then(
      data => (repositories = data.data.items)
    );
  }
  yield delay(1000);
  yield put({ type: "getRepositoriesAsync", payload: repositories });
}

export function* getUsers() {
  yield takeLatest(findUsersType, getUsersAsync);
}

export function* getRepositories() {
  yield takeLatest(findRepositoriesType, getRepositoriesAsync);
}
