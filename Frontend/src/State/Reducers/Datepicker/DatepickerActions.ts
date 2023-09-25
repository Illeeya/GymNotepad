export enum ActionType {
  PICKYEAR = "pickYear",
  PICKMONTH = "pickMonth",
  PICKDAY = "pickDay",
}

interface PickYear {
  type: ActionType.PICKYEAR;
  payload: number;
}

interface PickMonth {
  type: ActionType.PICKMONTH;
  payload: number;
}

interface PickDay {
  type: ActionType.PICKDAY;
  payload: number;
}

export type Action = PickYear | PickMonth | PickDay;
