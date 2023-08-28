import { useWorkoutsContext } from "../../Context/WorkoutsContext";

export default function Tester() {
  const { name, changeName } = useWorkoutsContext();

  return (
    <>
      {name} <button onClick={() => changeName("Jamaha")}>qwe</button>
    </>
  );
}
