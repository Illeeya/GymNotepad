export type ChangeWorkoutActions = "add" | "remove" | "modify" | "load";

export interface WorkoutsContextType {
  workouts: Workout[];

  changeWorkouts: (workouts: Workout[], action: ChangeWorkoutActions) => void;
}

export interface Workout {
  _id: {
    $oid: string;
  };
  id: number;
  ownerId: number;
  type: string;
  date: string;

  exercises: Exercise[];
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
  __v: number;
}

export interface Exercise {
  workoutId: number;
  id: number;
  name: string;
  reps: number;
  series: number;
  weight: number;
  bar: null | number;
  _id: {
    $oid: string;
  };
  createdAt: {
    $date: string;
  };
  updatedAt: {
    $date: string;
  };
}
