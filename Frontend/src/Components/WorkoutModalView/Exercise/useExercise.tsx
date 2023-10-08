import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { Exercise } from "../../../Types/Workout";
import { actionCreators } from "../../../State";
import { bindActionCreators } from "redux";

type ExerciseProps = {
    exerciseId: string;
    workoutId: string;
};

// type ExerciseData = {
//     workoutId: string;
//     id: string;
//     name: string;
//     reps: number | string;
//     series: number | string;
//     weight: number | string;
//     bar: null | number;
// };
export default function useExercise(props: ExerciseProps) {
    const dispatch = useDispatch();
    const { modifyCurrentWorkout } = bindActionCreators(actionCreators, dispatch);
    const currentWorkout = useSelector((state: State) => state.currentWorkout);

    // function getExerciseData() {
    //     return workouts
    //         .find((workout) => workout.id == props.workoutId)
    //         ?.exercises.find((exercise: Exercise) => exercise.id == props.exerciseId);
    // }

    // const [exerciseData, setExerciseData] = useState<ExerciseData>(
    //     getExerciseData() || {
    //         workoutId: crypto.randomUUID(),
    //         id: crypto.randomUUID(),
    //         name: "",
    //         reps: "",
    //         series: "",
    //         weight: "",
    //         bar: null,
    //     }
    // );

    const currentExercise = currentWorkout!.exercises.find((x) => x.id === props.exerciseId);

    const exerciseData = {
        workoutId: currentExercise?.workoutId || crypto.randomUUID(),
        id: currentExercise?.id || crypto.randomUUID(),
        name: currentExercise?.name || "",
        reps: currentExercise?.reps || "",
        series: currentExercise?.series || "",
        weight: currentExercise?.weight || "",
        bar: currentExercise?.bar || null,
    };

    const max: number = getMax();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
    function getMax(): number {
        const workouts = useSelector((state: State) => state.workouts.workouts);
        let max = 0;
        const myExercises = [];
        for (const workout of workouts) {
            for (const exercise of workout.exercises) {
                if (exercise.name == exerciseData.name) myExercises.push(exercise);
            }
        }

        for (const exercise of myExercises) {
            if (max < Number(exercise.weight) + Number(exercise.bar))
                max = Number(exercise.weight) + Number(exercise.bar);
        }
        return max;
    }

    const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        //setExerciseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

        const workout = currentWorkout!;
        let exercises = currentWorkout!.exercises;

        const exercise = exercises.find((x) => x.id === exerciseData.id);
        if (exercise) {
            const _exercise = { ...exercise, [e.target.name]: e.target.value };
            exercises = exercises.map((x) => (x.id == exerciseData.id ? _exercise : x));
        } else {
            exercises.push({
                ...exerciseData,
            });
        }
        console.log("s");
        modifyCurrentWorkout({ ...workout, exercises: exercises });
    };

    const switchCollapse = () => {
        setIsCollapsed((prev) => !prev);
    };

    return { exerciseData, max, handleDataChange, switchCollapse, isCollapsed };
}
