import ExerciseComponent from "../../Components/WorkoutModalView/Exercise/Exercise";
import { useWorkoutsContext } from "../../Context/WorkoutsContext";
import { Exercise, Workout } from "../../Context/WorkoutsContextTypes";

export default function useWorkoutModalView() {
  function Exercises(workoutId: number) {
    const { workouts } = useWorkoutsContext();
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
