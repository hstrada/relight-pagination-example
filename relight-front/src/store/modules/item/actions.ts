import * as itemsTypes from "./action-types";

function action(type: any, payload = {}) {
  return { type, ...payload };
}

export const items = {
  request: (refresh: boolean) =>
    action(itemsTypes.ITEMS_FETCH_REQUEST, { payload: refresh }),
};
