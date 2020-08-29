import { ReduxInterface } from "../../../interfaces";

export const getItems = (state: ReduxInterface) => state.items.data || [];

export const getItemsStatus = (state: ReduxInterface) => ({
  status: state.items.status || "",
});
