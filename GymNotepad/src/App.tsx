import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Workout from "./components/Workout";

function App() {
  const [workoutArray, setWorkoutArray] = useState<JSX.Element[]>([]);

  return (
    <>
      <button>Add Workout</button>
      <Workout />
    </>
  );
}

export default App;
