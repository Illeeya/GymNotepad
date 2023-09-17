import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../Context/WorkoutsContext";

export function useApp() {
  const [showCallendar, setShowCallendar] = useState<boolean>(true);

  const { changeWorkouts } = useWorkoutsContext();

  function switchView() {
    setShowCallendar(!showCallendar);
  }

  useEffect(() => {
    fetchWorkoutsForUser();
  }, []);

  function fetchWorkoutsForUser() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Ilee" }),
    };
    fetch("http://localhost:6969/getWorkoutsForUser", requestOptions)
      .then((response) => response.json())
      .then((data) => changeWorkouts(data, "load"))
      .catch((error) => alert(`Error: ${error}`));
  }

  function testGet() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Ilee" }),
    };
    fetch("http://localhost:6969/getWorkoutsForUser", requestOptions)
      .then((response) => response.text())
      .then((data) => alert(`Werks: ${data}`))
      .catch((error) => alert(`Error: ${error}`));
  }

  return { showCallendar, switchView, testGet };
}
