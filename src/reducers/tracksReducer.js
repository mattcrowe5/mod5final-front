export function tracksReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_TRACKS":
      return action.payload;
    default:
      return state;
  }
}
