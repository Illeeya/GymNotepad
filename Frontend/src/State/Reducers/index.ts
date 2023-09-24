import { combineReducers } from "redux";
import datapickerReducer from "./Datepicker/DatepickerReducer";
import workoutModalReducer from "./WorkoutModal/WorkoutModalRecuder";
import workoutsReducer from "./Workouts/WorkoutsReducer";
import currentWorkoutsReducer from "./CurrentWorkout/CurrentWorkoutReducer";

const reducers = combineReducers({
  datapicker: datapickerReducer,
  workouts: workoutsReducer,
  workoutModal: workoutModalReducer,
  currentWorkout: currentWorkoutsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
