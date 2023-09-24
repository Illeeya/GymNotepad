import { Workout } from "../../../Types/Workout";

// One action but it's here for clarity
export enum ActionType {
  MODIFYCURRENTWORKOUT = "modifyCurrentWorkout",
  CLEARCURRENTWORKOUT = "clearCurrentWorkout",
}

interface ModifyCurrentWorkout {
  type: ActionType.MODIFYCURRENTWORKOUT;
  payload: Workout;
}

interface ClearCurrentWorkout {
  type: ActionType.CLEARCURRENTWORKOUT;
}

export type Action = ModifyCurrentWorkout | ClearCurrentWorkout;
