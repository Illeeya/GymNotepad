export interface Workout {
  id: string;
  ownerId: number;
  type: string;
  date: string;

  exercises: Exercise[];
}

export interface Exercise {
  workoutId: string;
  id: string;
  name: string;
  reps: number;
  series: number;
  weight: number;
  bar: null | number;
}
