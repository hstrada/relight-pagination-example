export const getItems = (state: any) => state.items.data || [];

export const getItemsStatus = (state: any) => ({
  status: state.items.status || "",
});
