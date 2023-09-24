import { Workout } from "../../../Types/Workout";
import { Action, ActionType } from "./WorkoutsActions";

type WorkoutsType = {
  isLoaded: boolean;
  workouts: Workout[];
};

const initialState: WorkoutsType = {
  isLoaded: false,
  workouts: [],
};

const reducer = (state: WorkoutsType = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADDWORKOUT:
      return { isLoaded: state.isLoaded, workouts: [action.payload, ...state.workouts] };
    case ActionType.REMOVEWORKOUT:
      return {
        isLoaded: state.isLoaded,
        workouts: state.workouts.filter((x) => x.id !== action.payload),
      };
    case ActionType.MODIFYWORKOUT:
      return {
        isLoaded: state.isLoaded,
        workouts: state.workouts.map((x) => {
          return x.id === action.payload.id ? action.payload : x;
        }),
      };
    case ActionType.LOADWORKOUTS:
      return { isLoaded: true, workouts: action.payload };
    default:
      return state;
  }
};

export default reducer;
