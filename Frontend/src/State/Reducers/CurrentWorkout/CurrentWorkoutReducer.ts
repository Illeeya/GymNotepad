import { Workout } from "../../../Types/Workout";
import { Action, ActionType } from "./CurrentWorkoutActions";

const reducer = (state: Workout | null = null, action: Action) => {
  switch (action.type) {
    case ActionType.MODIFYCURRENTWORKOUT:
      return action.payload;
    case ActionType.CLEARCURRENTWORKOUT:
      return null;
    default:
      return state;
  }
};

export default reducer;
