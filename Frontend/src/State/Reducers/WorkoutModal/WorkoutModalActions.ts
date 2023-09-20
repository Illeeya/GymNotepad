export enum ActionType {
  TOGGLEMODAL = "toggleModal",
  CHANGEID = "changeId",
}

interface ToggleModal {
  type: ActionType.TOGGLEMODAL;
}

interface ChangeId {
  type: ActionType.CHANGEID;
  payload: number;
}

export type Action = ToggleModal | ChangeId;
