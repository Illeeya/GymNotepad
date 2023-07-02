import { ChangeEvent, useState } from "react";
import "./exerciseStyle.css";

export default function Exercise() {
  const [barWeight, setBarWeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleBarWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setBarWeight(value);
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setWeight(value);
  };

  return (
    <div className="exerciseContainer">
      <input
        className="exerciseName"
        type="text"
        name="exerciseName"
        id="exerciseName"
        placeholder="Exercise name..."
      />
      <div className="exerciseStats">
        <p className="leftLabel">Bar</p>
        <input
          type="number"
          name="barWeight"
          id="barWeight"
          onChange={handleBarWeightChange}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          onChange={handleWeightChange}
        />
        <p className="rightLabel">Weight</p>
        <p className="weightSummary">
          {Number(weight) + Number(barWeight) + " kg"}
        </p>
        <p className="leftLabel">Reps</p>
        <input type="number" name="reps" id="reps" />
        <input type="number" name="series" id="series" />
        <p className="rightLabel">Series</p>
      </div>
      <textarea
        name="commentSection"
        id="commentSection"
        className="commentSection"
        placeholder="Additional comments..."
      ></textarea>
    </div>
  );
}
