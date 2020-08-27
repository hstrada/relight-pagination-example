import { combineReducers } from "redux";

import items from "./item/reducer";

const appReducer = combineReducers({
  items,
});

export default (state: any, action: any) => {
  return appReducer(state, action);
};
