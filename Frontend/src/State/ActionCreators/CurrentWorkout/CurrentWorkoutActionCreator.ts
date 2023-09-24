import { Dispatch } from "redux";
import { Workout } from "../../../Types/Workout";
import { Action, ActionType } from "../../Reducers/CurrentWorkout/CurrentWorkoutActions";

export const modifyCurrentWorkout = (workout: Workout) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.MODIFYCURRENTWORKOUT,
      payload: workout,
    });
  };
};

export const clearCurrentWorkout = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEARCURRENTWORKOUT,
    });
  };
};
