export interface WorkoutsContextType {
  workouts: Workout[];

  changeWorkouts: (workout: Workout, action: string) => void;
}

export interface Workout {
  id: number;
  type: string;
  date: Date;

  exercises: Exercise[];
}

export interface Exercise {
  id: number;
  name: string;
  reps: number;
  series: number;
  weight: number;
  bar: number | null;
}
