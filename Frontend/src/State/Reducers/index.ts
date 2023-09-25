import { combineReducers } from "redux";
import datapickerReducer from "./Datepicker/DatepickerReducer";
import workoutsReducer from "./Workouts/WorkoutsReducer";
import workoutModalReducer from "./WorkoutModal/WorkoutModalReducer";
import currentWorkoutsReducer from "./CurrentWorkout/CurrentWorkoutReducer";

const reducers = combineReducers({
  datapicker: datapickerReducer,
  workouts: workoutsReducer,
  workoutModal: workoutModalReducer,
  currentWorkout: currentWorkoutsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
