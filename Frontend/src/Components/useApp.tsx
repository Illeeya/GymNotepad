import { useState } from "react";

export function useApp() {
  const [showCallendar, setShowCallendar] = useState<boolean>(true);

  function switchView() {
    setShowCallendar(!showCallendar);
  }
  return { showCallendar, switchView };
}
