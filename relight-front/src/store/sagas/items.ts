import { put, takeLatest, call, select } from "redux-saga/effects";

import * as itemsTypes from "../modules/item/action-types";
import { getItems } from "../modules/item/selectors";

import config from "../../config/api.dev";

const URL = ({ page }: { page: number }) =>
  `${config.BASE_URL}/items?page=${page}&size=5`;

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

const items = function* (): Generator {
  // only get the response of the latest request fired
  yield takeLatest(itemsTypes.ITEMS_FETCH_REQUEST, fetchItems);
};

export default items;
