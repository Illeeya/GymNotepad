import { useSelector } from "react-redux";
import ExerciseComponent from "../../Components/WorkoutModalView/Exercise/Exercise";
import { State } from "../../State/Reducers";
import { Exercise, Workout } from "../../Types/Workout";

export default function useWorkoutModalView() {
  function Exercises(workoutId: number) {
    const workouts = useSelector((state: State) => state.workouts);
    const workout: Workout | undefined = workouts.find((workout) => workout.id == workoutId);
    const exercises: Exercise[] | undefined = workout?.exercises;

    console.log(workout);

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
