export async function fetchWorkoutsForUser() {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "Ilee" }),
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
