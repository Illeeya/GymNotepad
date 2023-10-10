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
    reps: number | string | null;
    series: number | string | null;
    weight: number | string | null;
    bar: null | number;
}
