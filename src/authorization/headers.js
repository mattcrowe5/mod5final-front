export function headers() {
  return {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${localStorage.getItem("jwt")}`
  };
}
