import { ChangeEvent, useState } from "react";

export default function useExercise() {
  type ExerciseData = {
    name: string;
    reps: number | string;
    series: number | string;
    barWeight: number | string;
    weight: number | string;
    max: number | string;
  };

  const [exerciseData, setExerciseData] = useState<ExerciseData>({
    name: "",
    reps: "",
    series: "",
    barWeight: "",
    weight: "",
    max: "",
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setExerciseData({ ...exerciseData, [e.target.name]: e.target.value });
  };

  const switchCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return { exerciseData, handleDataChange, switchCollapse, isCollapsed };
}
