import { Workout } from "../../../Types/Workout";

export enum ActionType {
  // TOGGLEISLOADED = "toggleIsLoaded",
  ADDWORKOUT = "addWorkout",
  REMOVEWORKOUT = "removeWorkout",
  MODIFYWORKOUT = "modifyWorkout",
  LOADWORKOUTS = "loadWorkouts",
}

// interface ToggleIsLoaded {
//   type: ActionType.TOGGLEISLOADED;
// }

interface AddWorkout {
  type: ActionType.ADDWORKOUT;
  payload: Workout;
}

interface RemoveWorkout {
  type: ActionType.REMOVEWORKOUT;
  payload: string;
}

interface ModifyWorkout {
  type: ActionType.MODIFYWORKOUT;
  payload: Workout;
}

interface LoadWorkouts {
  type: ActionType.LOADWORKOUTS;
  payload: Workout[];
}

export type Action =
  // | ToggleIsLoaded
  AddWorkout | RemoveWorkout | ModifyWorkout | LoadWorkouts;
