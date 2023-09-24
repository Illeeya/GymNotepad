import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../State";
import { fetchWorkoutsForUser } from "../api/Workouts/WorkoutsApi";

export function useApp() {
  const [showCallendar, setShowCallendar] = useState<boolean>(true);

  const dispatch = useDispatch();

  const { loadWorkouts } = bindActionCreators(actionCreators, dispatch);

  function switchView() {
    setShowCallendar(!showCallendar);
  }

  useEffect(() => {
    async function getData() {
      const data = await fetchWorkoutsForUser();
      loadWorkouts(data);
    }
    getData();
  }, []);

  return { showCallendar, switchView };
}
