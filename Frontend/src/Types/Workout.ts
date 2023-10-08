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
    reps: number | string;
    series: number | string;
    weight: number | string;
    bar: null | number;
}
