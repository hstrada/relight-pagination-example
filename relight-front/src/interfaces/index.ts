export interface IItem {
  id: number | string;
  description: string;
}

export interface ItemState {
  data: IItem[];
  status: StatusRequest;
  hasNextPage: boolean;
}

export interface ReduxInterface {
  items: ItemState;
}

export interface IAction {
  type: string;
}

export enum StatusRequest {
  OK = "OK",
  LOADING = "LOADING",
  FAILED = "FAILED",
  FINISHED = "FINISHED",
}
