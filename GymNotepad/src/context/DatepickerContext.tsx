import { createContext, useContext, useState } from "react";

interface DatepickerContextType {
  pickedYear: number;
  pickYear: (pickedYear: number) => void;
  pickedMonth: number;
  pickMonth: (pickedMonth: number) => void;
}

const DatepickerContext = createContext<DatepickerContextType | null>(null);

export function useDatepickerContext() {
  const context = useContext(DatepickerContext);
  if (!context) {
    throw new Error("useDatepickerContext must be used within a DatepickerContextProvider");
  }
  return context;
}

interface DatepickerContextProviderProps {
  children: React.ReactNode;
}

export function DatepickerContextProvider({ children }: DatepickerContextProviderProps) {
  const [pickedYear, setPickedYear] = useState<number>(new Date().getUTCFullYear());
  const [pickedMonth, setPickedMonth] = useState<number>(new Date().getUTCMonth());

  function pickYear(pickedYear: number) {
    setPickedYear(pickedYear);
  }

  function pickMonth(pickedMonth: number) {
    setPickedMonth(pickedMonth);
  }

  return (
    <DatepickerContext.Provider value={{ pickedYear, pickYear, pickedMonth, pickMonth }}>
      {children}
    </DatepickerContext.Provider>
  );
}
