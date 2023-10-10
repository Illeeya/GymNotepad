import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { actionCreators } from "../../../State";
import { bindActionCreators } from "redux";
import { Exercise } from "../../../Types/Workout";

type ExerciseProps = {
    exerciseId: string;
    workoutId: string;
    isCollapsed?: boolean;
};

export default function useExercise(props: ExerciseProps) {
    const dispatch = useDispatch();
    const { modifyCurrentWorkout } = bindActionCreators(actionCreators, dispatch);
    const currentWorkout = useSelector((state: State) => state.currentWorkout);

    function getExerciseData() {
        console.log(currentWorkout!.exercises.find((x) => x.id === props.exerciseId));
        return currentWorkout!.exercises.find((x) => x.id === props.exerciseId);
    }

    const [exerciseData, setExerciseData] = useState<Exercise>(
        getExerciseData() || {
            workoutId: crypto.randomUUID(),
            id: crypto.randomUUID(),
            name: "",
            reps: "",
            series: "",
            weight: "",
            bar: null,
        }
    );

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
        setExerciseData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleOnBlurUpdate = (e: ChangeEvent<HTMLInputElement>) => {
        changeCurrentExercise(e.target.name, e.target.value);
    };

    function changeCurrentExercise(name: string, value: any) {
        const workout = currentWorkout!;
        let exercises = currentWorkout!.exercises;

        const exercise = exercises.find((x) => x.id === exerciseData.id);
        if (exercise) {
            const _exercise = { ...exercise, [name]: value };
            exercises = exercises.map((x) => (x.id == exerciseData.id ? _exercise : x));
        } else {
            exercises.push({
                ...exerciseData,
            });
        }
        console.log(name, value);
        modifyCurrentWorkout({ ...workout, exercises: exercises });
    }

    const switchCollapse = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    return {
        exerciseData,
        max,
        handleDataChange,
        switchCollapse,
        handleOnBlurUpdate,
        isCollapsed,
    };
}
