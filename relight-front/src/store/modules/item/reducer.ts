import * as itemsTypes from "./action-types";

import { ItemState, StatusRequest } from "../../../interfaces";

const initialState: ItemState = {
  data: [],
  status: StatusRequest.OK,
  hasNextPage: true,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case itemsTypes.ITEMS_FETCH_REQUEST:
      return {
        ...state,
        status: StatusRequest.LOADING,
        data: action.payload ? [] : [...state.data],
      };
    case itemsTypes.ITEMS_FETCH_SUCCEEDED:
      return {
        data: action.payload.refresh
          ? [action.payload.data]
          : [...state.data, action.payload.data],
        status: StatusRequest.OK,
        hasNextPage: true,
      };
    case itemsTypes.ITEMS_FETCH_FINISHED:
      return {
        ...state,
        status: StatusRequest.FINISHED,
        hasNextPage: false,
      };
    case itemsTypes.ITEMS_FETCH_FAILED:
      return {
        ...state,
        status: StatusRequest.FINISHED,
      };

    default:
      return state;
  }
};
