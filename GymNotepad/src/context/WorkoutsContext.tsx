import { createContext, useContext, useState } from "react";

interface WorkoutsContextType {
  name: string;
  changeName: (name: string) => void;
}

const WorkoutContext = createContext<WorkoutsContextType | null>(null);

export function useWorkoutsContext() {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkoutsContext must be used within a WorkoutsProvider");
  }
  return context;
}

interface WorkoutProviderProps {
  children: React.ReactNode;
}
export function WorkoutsProvider({ children }: WorkoutProviderProps) {
  const [name, setName] = useState<string>("Joseph");

  function changeName(name: string) {
    setName(name);
  }

  return (
    <WorkoutContext.Provider value={{ name, changeName }}>{children}</WorkoutContext.Provider>
  );
}
