import { put, takeLatest, call } from "redux-saga/effects";

import * as itemsTypes from "../modules/item/action-types";

const URL = "http://localhost:8080/items?page=0&size=5";

function* fetchItems() {
  try {
    const response = yield call(fetch, URL);
    const responseBody = yield response.json();

    yield put({ type: itemsTypes.ITEMS_FETCH_SUCCEEDED, payload: responseBody });
  } catch (e) {
    yield put({ type: itemsTypes.ITEMS_FETCH_FAILED });
  }
}

const saga = function* (): Generator {
  yield takeLatest(itemsTypes.ITEMS_FETCH_REQUEST, fetchItems);
};

export default saga;
