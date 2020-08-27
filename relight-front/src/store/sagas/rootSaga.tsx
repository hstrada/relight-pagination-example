import { all, fork } from "redux-saga/effects";

import items from "./items";

export default function* rootSaga() {
  return yield all([fork(items)]);
}
