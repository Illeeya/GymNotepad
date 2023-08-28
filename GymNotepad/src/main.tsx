import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./mainStyle.css";
import { WorkoutModalContextProvider } from "./Context/WorkoutModalContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <WorkoutModalContextProvider>
      <App />
    </WorkoutModalContextProvider>
  </React.StrictMode>
);
