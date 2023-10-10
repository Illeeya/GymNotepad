import { useSelector } from "react-redux";
import ExerciseComponent from "../../Components/WorkoutModalView/Exercise/Exercise";
import { State } from "../../State/Reducers";
import { Exercise, Workout } from "../../Types/Workout";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../State";
import { useEffect } from "react";

export default function useWorkoutModalView(workoutId: string) {
    //
    const workouts = useSelector((state: State) => state.workouts.workouts);

    const dispatch = useDispatch();
    const { modifyCurrentWorkout } = bindActionCreators(actionCreators, dispatch);

    const currentWorkout = useSelector(
        (state: State) => state.currentWorkout,
        (prev, next) => {
            return prev?.id === next?.id && prev?.exercises.length === next?.exercises.length;
        }
    );

    const { pickedYear, pickedMonth, pickedDay } = useSelector(
        (state: State) => state.datapicker
    );

    useEffect(() => {
        console.log("DOING IT");
        setCurrentWorkout();
    }, []);

    function setCurrentWorkout() {
        const _date = new Date(pickedYear, pickedMonth, pickedDay + 1);
        const workout: Workout = workouts.find((workout) => workout.id == workoutId) || {
            id: crypto.randomUUID(),
            ownerId: 1,
            type: "",
            date: _date.toISOString().split("T")[0],
            exercises: [],
        };
        modifyCurrentWorkout(workout);
    }

    const Exercises = () => {
        const exercises: Exercise[] | undefined = currentWorkout?.exercises;

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
    };

    function addNewExercise() {
        console.log(currentWorkout?.exercises);
        const newExercise: Exercise = {
            workoutId: currentWorkout!.id,
            id: crypto.randomUUID(),
            name: "",
            reps: null,
            series: null,
            weight: null,
            bar: null,
        };
        modifyCurrentWorkout({
            ...currentWorkout!,
            exercises: [...currentWorkout!.exercises, newExercise],
        });
    }

    return { Exercises, addNewExercise };
}
