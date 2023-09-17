import { createContext, useContext, useState } from "react";
import { Workout, WorkoutsContextType, ChangeWorkoutActions } from "./WorkoutsContextTypes";

const WorkoutsContext = createContext<WorkoutsContextType | null>(null);

export function useWorkoutsContext() {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw new Error("useWorkoutsContext must be used within a WorkoutsContextProvider");
  }
  return context;
}

interface WorkoutsContextProviderProps {
  children: React.ReactNode;
}

export function WorkoutsContextProvider({ children }: WorkoutsContextProviderProps) {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  function changeWorkouts(workouts: Workout[], action: ChangeWorkoutActions) {
    if (action === "add") setWorkouts((current) => [...current, workouts[0]]);
    if (action === "load") {
      console.log("HALOS KURWA");
      console.log("NOW", workouts);
      setWorkouts(workouts);
    }
  }

  return (
    <WorkoutsContext.Provider value={{ workouts, changeWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
}
