export enum ActionType {
  PICKYEAR = "pickYear",
  PICKMONTH = "pickMonth",
}

interface PickYear {
  type: ActionType.PICKYEAR;
  payload: number;
}

interface PickMonth {
  type: ActionType.PICKMONTH;
  payload: number;
}

export type Action = PickYear | PickMonth;
