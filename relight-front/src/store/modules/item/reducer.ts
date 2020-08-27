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
      };
    case itemsTypes.ITEMS_FETCH_SUCCEEDED:
      console.log(action.payload);
      return {
        data: action.payload,
        status: "ok",
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
