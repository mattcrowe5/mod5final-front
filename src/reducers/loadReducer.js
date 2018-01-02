export function loadReducer(state = null, action) {
  switch (action.type) {
    case "LOADING":
      return action.payload;
    case "FETCH_SHOWS":
      return "done";
    default:
      return state;
  }
}
