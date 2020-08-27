import { put, takeLatest, call, select } from "redux-saga/effects";

import * as itemsTypes from "../modules/item/action-types";
import { getItems } from "../modules/item/selectors";

const URL = ({ page }: { page: number }) =>
  `http://localhost:8080/items?page=${page}&size=5`;

function* fetchItems({ payload }: ReturnType<any>) {
  try {
    const actualPage = yield select(getItems);

    const response = yield call(fetch, URL({ page: actualPage.length }));

    const { ok } = response;

    if (ok) {
      const responseBody = yield response.json();

      if (responseBody.length > 0) {
        yield put({
          type: itemsTypes.ITEMS_FETCH_SUCCEEDED,
          payload: { data: responseBody, refresh: payload },
        });
      } else {
        yield put({ type: itemsTypes.ITEMS_FETCH_FINISHED });
      }
    } else {
      yield put({ type: itemsTypes.ITEMS_FETCH_FAILED });
    }
  } catch (e) {
    yield put({ type: itemsTypes.ITEMS_FETCH_FAILED });
  }
}

const saga = function* (): Generator {
  yield takeLatest(itemsTypes.ITEMS_FETCH_REQUEST, fetchItems);
};

export default saga;
