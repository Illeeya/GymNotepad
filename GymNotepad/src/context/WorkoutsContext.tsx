import { createContext, useContext, useState } from "react";
import { Workout, WorkoutsContextType } from "./WorkoutsContextTypex";

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

  function changeWorkouts(workout: Workout, action: string) {
    if (action === "add") setWorkouts((current) => [...current, workout]);
  }
  return (
    <WorkoutsContext.Provider value={{ workouts, changeWorkouts }}>
      {children}
    </WorkoutsContext.Provider>
  );
}
