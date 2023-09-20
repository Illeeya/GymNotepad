import { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../State/Reducers";
import { Exercise } from "../../../Types/Workout";

type ExerciseProps = {
  exerciseId: number;
  workoutId: number;
};

type ExerciseData = {
  workoutId: number;
  id: number;
  name: string;
  reps: number | string;
  series: number | string;
  weight: number | string;
  bar: null | number | string;
  _id: string;

  createdAt: string;

  updatedAt: string;
};
export default function useExercise(props: ExerciseProps) {
  const workouts = useSelector((state: State) => state.workouts);

  function getExerciseData() {
    return workouts
      .find((workout) => workout.id == props.workoutId)
      ?.exercises.find((exercise: Exercise) => exercise.id == props.exerciseId);
  }

  const [exerciseData, setExerciseData] = useState<ExerciseData>(
    getExerciseData() || {
      workoutId: 0,
      id: 0,
      name: "",
      reps: "",
      series: "",
      weight: "",
      bar: "",
      _id: "",
      createdAt: "",
      updatedAt: "",
    }
  );

  const max: number = getMax();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  function getMax(): number {
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
    setExerciseData({ ...exerciseData, [e.target.name]: e.target.value });
  };

  const switchCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return { exerciseData, max, handleDataChange, switchCollapse, isCollapsed };
}
