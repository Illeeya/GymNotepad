import * as DatepickerActionCreator from "./Datepicker/DatepickerActionCreator";
import * as WorkoutModalActionCreator from "./WorkoutModal/WorkoutModalActionCreator";
import * as WorkoutsActionCreator from "./Workouts/WorkoutsActionCreator";
import * as CurrentWorkoutActionCreator from "./CurrentWorkout/CurrentWorkoutActionCreator";

const actionCreators = {
  ...DatepickerActionCreator,
  ...WorkoutModalActionCreator,
  ...WorkoutsActionCreator,
  ...CurrentWorkoutActionCreator,
};

export { actionCreators };
