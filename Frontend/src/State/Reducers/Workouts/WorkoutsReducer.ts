import { Workout } from "../../../Types/Workout";
import { Action, ActionType } from "./WorkoutsActions";

const initialState: Workout[] = [];

const reducer = (state: Workout[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDWORKOUT:
      return [action.payload, ...state];
    case ActionType.REMOVEWORKOUT:
      return state.filter((x) => x.id !== action.payload);
    case ActionType.MODIFYWORKOUT:
      return state.map((x) => {
        return x.id === action.payload.id ? action.payload : x;
      });
    case ActionType.LOADWORKOUTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
