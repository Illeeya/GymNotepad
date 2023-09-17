import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Views/App";
import "./mainStyle.css";
import { WorkoutModalContextProvider } from "./Context/WorkoutModalContext";
import { DatepickerContextProvider } from "./Context/DatepickerContext";
import { WorkoutsContextProvider } from "./Context/WorkoutsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DatepickerContextProvider>
      <WorkoutsContextProvider>
        <WorkoutModalContextProvider>
          <App />
        </WorkoutModalContextProvider>
      </WorkoutsContextProvider>
    </DatepickerContextProvider>
  </React.StrictMode>
);
