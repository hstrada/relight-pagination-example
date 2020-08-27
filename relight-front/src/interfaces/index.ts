export interface IItem {
  id: number | string;
  description: string;
}

export interface IAction {
  type: string;
}

export enum Status {
  OK = "OK",
  LOADING = "LOADING",
  FAILED = "FAILED",
}
