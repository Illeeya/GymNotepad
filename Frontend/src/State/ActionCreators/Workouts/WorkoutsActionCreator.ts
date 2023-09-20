import { Dispatch } from "redux";
import { Workout } from "../../../Types/Workout";
import { Action, ActionType } from "../../Reducers/Workouts/WorkoutsActions";

export const addWorkout = (newWorkout: Workout) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADDWORKOUT,
      payload: newWorkout,
    });
  };
};
export const removeWorkout = (workoutId: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVEWORKOUT,
      payload: workoutId,
    });
  };
};
export const modifyWorkout = (modifiedWorkout: Workout) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MODIFYWORKOUT,
      payload: modifiedWorkout,
    });
  };
};
export const loadWorkouts = (workouts: Workout[]) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADWORKOUTS,
      payload: workouts,
    });
  };
};
