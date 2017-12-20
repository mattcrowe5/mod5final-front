export function headers() {
  return {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("jwt")
  };
}

export function relatedArtistsHeaders(id) {
  return {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("jwt"),
    id: id
  };
}
