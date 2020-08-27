import * as itemsTypes from "./action-types";

const initialState = {
  data: [],
  status: "",
  hasNextPage: true,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case itemsTypes.ITEMS_FETCH_REQUEST:
      return {
        ...state,
        status: "loading",
        data: action.payload ? [] : [...state.data],
      };
    case itemsTypes.ITEMS_FETCH_SUCCEEDED:
      return {
        data: action.payload.refresh
          ? []
          : [...state.data, action.payload.data],
        status: "ok",
        hasNextPage: true,
      };
    case itemsTypes.ITEMS_FETCH_FINISHED:
      return {
        ...state,
        status: "finished",
        hasNextPage: false,
      };
    case itemsTypes.ITEMS_FETCH_FAILED:
      return {
        ...state,
        status: "failed",
      };

    default:
      return state;
  }
};
