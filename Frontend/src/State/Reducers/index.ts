import { combineReducers } from "redux";
import datapickerReducer from "./Datepicker/DatepickerReducer";
import workoutsReducer from "./Workouts/WorkoutsReducer";
import workoutModalReducer from "./WorkoutModal/WorkoutModalReducer";
import currentWorkoutsReducer from "./CurrentWorkout/CurrentWorkoutReducer";
import authenticationReducer from "./Authentication/AuthenticationReducer";

const reducers = combineReducers({
    datapicker: datapickerReducer,
    workouts: workoutsReducer,
    workoutModal: workoutModalReducer,
    currentWorkout: currentWorkoutsReducer,
    authentication: authenticationReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
