import { createContext, useContext, useState } from "react";

interface WorkoutModalContextType {
  isOpen: boolean;

  openClose: () => void;

  workoutId: number;

  changeWorkoutId: (workoutId: number) => void;
}

const WorkoutModalContext = createContext<WorkoutModalContextType | null>(null);

export function useWorkoutModalContext() {
  const context = useContext(WorkoutModalContext);
  if (!context) {
    throw new Error(
      "useWorkoutModalContext must be used within a WorkoutModalContextProvider"
    );
  }
  return context;
}

interface WorkoutModalContextProviderProps {
  children: React.ReactNode;
}

export function WorkoutModalContextProvider({ children }: WorkoutModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [workoutId, setWorkoutId] = useState<number>(0);

  function openClose() {
    setIsOpen((current) => !current);
  }

  function changeWorkoutId(workoutId: number) {
    setWorkoutId(workoutId);
  }
  return (
    <WorkoutModalContext.Provider value={{ isOpen, workoutId, openClose, changeWorkoutId }}>
      {children}
    </WorkoutModalContext.Provider>
  );
}
