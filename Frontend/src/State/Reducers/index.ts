import { combineReducers } from "redux";
import datapickerReducer from "./Datepicker/DatepickerReducer";
import workoutModalReducer from "./WorkoutModal/WorkoutModalRecuder";
import workoutsReducer from "./Workouts/WorkoutsReducer";

const reducers = combineReducers({
  datapicker: datapickerReducer,
  workouts: workoutsReducer,
  workoutModal: workoutModalReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
