import { useDatepickerContext } from "../../../Context/DatepickerContext";
import "./yearPickerStyle.css";

const YearPicker = () => {
  const { pickedYear, pickYear } = useDatepickerContext();
  const year: number = pickedYear;
  const years: JSX.Element[] = [];

  for (
    let i: number = new Date().getUTCFullYear();
    i > new Date().getUTCFullYear() - 20;
    i--
  ) {
    years.push(
      <option key={crypto.randomUUID()} value={i}>
        {i}
      </option>
    );
  }

  return (
    <select
      name="yearPicker"
      id="yearPicker"
      className=" datePicker yearPicker"
      onChange={(e) => pickYear(Number(e.target.value))}
      value={year}
    >
      {years}
    </select>
  );
};

export default YearPicker;
