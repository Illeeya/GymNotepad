import { toast } from "react-toastify";
import { Workout } from "../../Types/Workout";

export async function fetchWorkoutsForUser(username: string = "Ilee") {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username }),
  };
  return fetch("http://localhost:6969/getWorkoutsForUser", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
      throw error;
    });
}

export async function syncWorkout(username: string, workout: Workout) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, workout: workout }),
  };

  try {
    const response = await fetch("http://localhost:6969/addOrModifyWorkout", requestOptions);

    if (response.ok) {
      toast.success("Data saved", {
        theme: "dark",
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: 300,
      });
    } else {
      const errorResponse = await response.json();
      toast.error(`Error: ${errorResponse.message}`, { theme: "dark" });
    }
  } catch (error) {
    toast.error(`Error: ${error}`, { theme: "dark" });
  }
}

export function testGet() {
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
