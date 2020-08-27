import * as itemsTypes from "./action-types";

export const loadItems = ({ refresh }: { refresh: boolean }) => ({
  type: itemsTypes.ITEMS_FETCH_REQUEST,
  refresh,
});
