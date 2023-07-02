import { useState } from "react";
import DatePicker from "react-datepicker";
import Exercise from "./Exercise";
import "./workoutStyle.css";

export default function Workout() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [exercisesArray, setExercisesArray] = useState<JSX.Element[]>([]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const addExercise = () => {
    console.log("asd");
    setExercisesArray((current) => [<Exercise key={Date.now()} />, ...current]);
    console.log(exercisesArray);
  };

  return (
    <div className="workoutContainer">
      <div className="datePickerWrapper">
        <DatePicker
          className="datePicker"
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="PICK DATE"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <br />
      <button
        onClick={() => {
          addExercise();
        }}
        className="newExerciseButton"
      >
        Add Exercise
      </button>
      <br />
      {exercisesArray}
    </div>
  );
}
