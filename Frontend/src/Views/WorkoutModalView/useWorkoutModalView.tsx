import { useSelector } from "react-redux";
import ExerciseComponent from "../../Components/WorkoutModalView/Exercise/Exercise";
import { State } from "../../State/Reducers";
import { Exercise, Workout } from "../../Types/Workout";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State";
import { useEffect } from "react";

export default function useWorkoutModalView() {
  function Exercises(workoutId: string) {
    const workouts = useSelector((state: State) => state.workouts.workouts);

    const dispatch = useDispatch();
    const { modifyCurrentWorkout } = bindActionCreators(actionCreators, dispatch);

    const currentWorkout = useSelector((state: State) => state.currentWorkout);

    const { pickedYear, pickedMonth, pickedDay } = useSelector(
      (state: State) => state.datapicker
    );

    const exercises: Exercise[] | undefined = currentWorkout?.exercises;

    console.log(currentWorkout);

    function setCurrentWorkout() {
      const _date = new Date(pickedYear, pickedMonth, pickedDay);
      const workout: Workout = workouts.find((workout) => workout.id == workoutId) || {
        id: crypto.randomUUID(),
        ownerId: 1,
        type: "",
        date: _date.toISOString(),
        exercises: [],
      };
      modifyCurrentWorkout(workout);
    }

    useEffect(() => {
      setCurrentWorkout();
    }, []);

    return (
      <>
        {exercises?.map((exercise) => (
          <ExerciseComponent
            key={crypto.randomUUID()}
            exerciseId={exercise.id}
            workoutId={exercise.workoutId}
          />
        ))}
      </>
    );
  }

  return { Exercises };
}
