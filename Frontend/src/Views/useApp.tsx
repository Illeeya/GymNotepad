import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State";

export function useApp() {
  const [showCallendar, setShowCallendar] = useState<boolean>(true);

  const dispatch = useDispatch();

  const { loadWorkouts } = bindActionCreators(actionCreators, dispatch);

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
      .then((data) => loadWorkouts(data))
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
