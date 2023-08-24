export interface WorkoutsContextType {
  workouts: Workout[];

  changeWorkouts: (workout: Workout, action: string) => void;
}

export interface Workout {
  type: string;
  date: Date;

  exercises: Exercise[];
}

export interface Exercise {
  name: string;
  reps: number;
  series: number;
  weight: number;
  bar: number | null;
}
