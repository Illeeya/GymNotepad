import { Workout } from "../../../Types/Workout";

export enum ActionType {
  ADDWORKOUT = "addWorkout",
  REMOVEWORKOUT = "removeWorkout",
  MODIFYWORKOUT = "modifyWorkout",
  LOADWORKOUTS = "loadWorkouts",
}

interface AddWorkout {
  type: ActionType.ADDWORKOUT;
  payload: Workout;
}

interface RemoveWorkout {
  type: ActionType.REMOVEWORKOUT;
  payload: number;
}

interface ModifyWorkout {
  type: ActionType.MODIFYWORKOUT;
  payload: Workout;
}

interface LoadWorkouts {
  type: ActionType.LOADWORKOUTS;
  payload: Workout[];
}

export type Action = AddWorkout | RemoveWorkout | ModifyWorkout | LoadWorkouts;
