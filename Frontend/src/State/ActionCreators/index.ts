import * as DatepickerActionCreator from "./Datepicker/DatepickerActionCreator";
import * as WorkoutModalActionCreator from "./WorkoutModal/WorkoutModalActionCreator";
import * as WorkoutsActionCreator from "./Workouts/WorkoutsActionCreator";

const actionCreators = {
  ...DatepickerActionCreator,
  ...WorkoutModalActionCreator,
  ...WorkoutsActionCreator,
};

export { actionCreators };
